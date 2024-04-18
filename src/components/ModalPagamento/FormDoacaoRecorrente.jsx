import { useEffect, useState } from "react";
import { Card, Form, Input, Button, Select, Typography, Tabs, Collapse, Empty, Table } from "antd";
import { useForm, Controller, get } from 'react-hook-form';
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CurrencyInput } from 'react-currency-mask';
import Img from '../../assets/img_doacao_recorrente.png';

const SubscriptionEditForm = ({ subscription, MySwal, isMobile, update, setUpdate }) => {
    // form edit subscription
    const { handleSubmit, control, reset } = useForm();
    const { Option } = Select;

    const onSubmit = (formData) => {
        formData.subscription_id = subscription.subscription;
        axios.post(`${import.meta.env.VITE_URL_AXIOS}/updateSubscription.php`, formData)
            .then((response) => {
                if (response.data.success) {
                    MySwal.fire({
                        title: 'Sucesso!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setUpdate(!update);
                        }
                    })
                } else {
                    MySwal.fire({
                        title: 'Erro!',
                        text: response.data.error,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch((error) => {
                console.log(error.response);
            });

    }
    useEffect(() => {
        const data = {
            subscription_id: subscription.subscription
        };

        axios.post(`${import.meta.env.VITE_URL_AXIOS}/getSubscriptionById.php`, data)
            .then((response) => {
                if (response.data.success) {
                    const initialValues = {
                        vencimento: response.data.data.nextDueDate,
                        valor: response.data.data.value,
                        ciclo_cobranca: response.data.data.cycle,
                        forma_pagamento: response.data.data.billingType,
                    };

                    reset(initialValues);
                }
            })
            .catch((error) => {
                console.log(error.response);
                reset();
            });
    }, [subscription, reset, update]);

    const excluirAssinatura = (subs) => {
        MySwal.fire({
            title: 'Tem certeza?',
            text: "Você tem certeza que deseja excluir esta doação?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    subscription_id: subs
                };

                axios.post(`${import.meta.env.VITE_URL_AXIOS}/deleteSubscription.php`, data)
                    .then((response) => {
                        if (response.data.success) {
                            MySwal.fire({
                                title: 'Sucesso!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setUpdate(!update);
                                }
                            })
                        } else {
                            MySwal.fire({
                                title: 'Erro!',
                                text: response.data.error,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });
            }
        });
    }



    return (
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <h3>Formulário para edição da doação recorrente</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Data de Vencimento">
                    <Controller
                        name="vencimento"
                        control={control}
                        render={({ field }) => <Input type="date" {...field} placeholder="Data de Vencimento" />}
                    />
                </Form.Item>
                <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Valor">
                    <Controller
                        name="valor"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <CurrencyInput
                                value={field.value}
                                onChangeValue={(event, originalValue, maskedValue) => {
                                    field.onChange(originalValue);

                                }}
                                InputElement={
                                    <Input placeholder="Valor" {...field} />
                                }
                            />}
                    />
                </Form.Item>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Ciclo de Cobrança">
                    <Controller
                        name="ciclo_cobranca"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} placeholder="Ciclo Cobrança">
                                <Option value="MONTHLY">Mensal</Option>
                                <Option value="WEEKLY">Semanal</Option>
                                <Option value="BIWEEKLY">Quinzenal</Option>
                                <Option value="QUARTERLY">Trimestral</Option>
                                <Option value="SEMIANNUALLY">Semestral</Option>
                                <Option value="YEARLY">Anual</Option>
                            </Select>
                        )}
                    />
                </Form.Item>
                <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Forma de Pagamento">
                    <Controller
                        name="forma_pagamento"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} placeholder="Forma de Pagamento">
                                <Option value="BOLETO">Boleto</Option>
                                <Option value="CREDIT_CARD">Cartão de Crédito</Option>
                                <Option value="PIX">PIX</Option>
                                <Option value="UNDEFINED">Definir no pagamento</Option>
                            </Select>
                        )}
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                        <Button onClick={() => reset()}>Reset</Button>

                    </div>
                    <Button danger onClick={() => excluirAssinatura(subscription.subscription)}>Excluir</Button>
                </div>

            </Form.Item>
        </Form>
    );
};

const TablePayments = ({ id }) => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const data = {
            subscription_id: id
        };

        axios.post(`${import.meta.env.VITE_URL_AXIOS}/getSubscriptionsPayments.php`, data)
            .then((response) => {
                console.log(response.data.data.data);
                if (response.data.success) {
                    setPayments(response.data.data.data);
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [id]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Data de Pagamento',
            dataIndex: 'paymentDate',
            key: 'paymentDate',
            render: (text) => text != null ? text.split('-').reverse().join('/') : 'Não Pago',
        },
        {
            title: 'Valor',
            dataIndex: 'value',
            key: 'value',
            render: (text) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(text),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Link de Pagamento',
            dataIndex: 'invoiceUrl',
            key: 'invoiceUrl',
            render: (text) => <a href={text} target="blank">Link</a>
        }
    ];

    return (
        <>
            <h3>Meus pagamentos</h3>
            {payments.length > 0 ?
                <Table size='small' dataSource={payments} columns={columns} />
                :
                <Empty description='Nenhum pagamento foi feito' />
            }
        </>

    );
}

const FormDoacaoRecorrente = ({ isMobile }) => {

    const [theUser, setTheUser] = useState({});
    const [subscriptions, setSubscriptions] = useState([]);
    const [update, setUpdate] = useState(false);

    const { Option } = Select;
    const { Title, Paragraph } = Typography;

    const MySwal = withReactContent(Swal);

    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (formData) => {
        axios.post(`${import.meta.env.VITE_URL_AXIOS}/createSubscription.php`, formData)
            .then((response) => {
                if (response.data.success) {
                    MySwal.fire({
                        title: 'Sucesso!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            reset();
                            setUpdate(!update);
                        }
                    })
                } else {
                    MySwal.fire({
                        title: 'Erro!',
                        text: response.data.error,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const fetchUserData = async () => {
        const loginToken = localStorage.getItem("loginToken");
        if (loginToken) {
            axios.defaults.headers.common["Authorization"] = `bearer ${loginToken}`;
            try {
                const { data } = await axios.get(
                    `https://amigosdacasa.org.br/gerenciador-doacoes-amigosdacasa/login_site/user-info.php`
                );
                setTheUser(data.user);
                if (data.success && data.user) {
                    reset(data.user); // Inicializa o formulário com os dados do usuário
                }
            } catch (error) {
                console.error("Erro ao buscar informações do usuário:", error);
            }
        }
    };



    const getSubscriptions = async () => {
        const data = {
            customer_id: theUser.customer_id
        }
        axios.post(`${import.meta.env.VITE_URL_AXIOS}/getSubscriptions.php`, data)
            .then((response) => {
                if (response.data.success) {
                    setSubscriptions(response.data.data);
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    useEffect(() => {

        fetchUserData();

    }, [reset]);

    useEffect(() => {
        getSubscriptions();
    }, [theUser, update]);

    const logoutUser = () => {
        localStorage.removeItem("loginToken");
        window.location.reload();
    }
    // ##################### collapse #####################

    const items = subscriptions.map((sub) => ({
        key: sub.id.toString(),
        label: `Doação criada em ${sub.dateCreated.split('-').reverse().join('/')} com vencimento em ${sub.dueDate.split('-').reverse().join('/')}`,
        children: (
            <>
                <SubscriptionEditForm
                    subscription={sub}
                    MySwal={MySwal}
                    update={update}
                    setUpdate={setUpdate}
                />
                <TablePayments id={sub.subscription} />
            </>

        ),
    }));




    return (
        <Card bordered={false} style={{ minHeight: '600px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Title level={3}>Doação Recorrente</Title>
                <Button onClick={logoutUser}>Logout</Button>
            </div>

            <Tabs
                style={{ marginTop: '10px' }}
                defaultActiveKey="1"
                type="card"
                items={[
                    {
                        label: `Criar doação recorrente`,
                        key: '1',
                        children: <>
                            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="ID do Doador">
                                        <Controller
                                            name="customer_id"
                                            control={control}
                                            render={({ field }) => <Input readOnly {...field} placeholder="ID do Doador" />}
                                        />
                                    </Form.Item>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="CPF">
                                        <Controller
                                            name="cpf"
                                            control={control}
                                            render={({ field }) => <Input readOnly {...field} placeholder="CPF" />}
                                        />
                                    </Form.Item>
                                </div>
                                <Form.Item label="Nome">
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field }) => <Input readOnly {...field} placeholder="Nome" />}
                                    />
                                </Form.Item>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Data de Vencimento">
                                        <Controller
                                            name="vencimento"
                                            control={control}
                                            render={({ field }) => <Input type="date" {...field} placeholder="Data de Vencimento" />}
                                        />
                                    </Form.Item>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Valor">
                                        <Controller
                                            name="value"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) =>
                                                <CurrencyInput
                                                    value={field.value}
                                                    onChangeValue={(event, originalValue, maskedValue) => {
                                                        field.onChange(originalValue);

                                                    }}
                                                    InputElement={
                                                        <Input placeholder="Valor" {...field} />
                                                    }
                                                />}
                                        />
                                    </Form.Item>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Ciclo de Cobrança">
                                        <Controller
                                            name="ciclo_cobranca"
                                            control={control}
                                            render={({ field }) => (
                                                <Select {...field} placeholder="Ciclo Cobrança">
                                                    <Option value="MONTHLY">Mensal</Option>
                                                    <Option value="WEEKLY">Semanal</Option>
                                                    <Option value="BIWEEKLY">Quinzenal</Option>
                                                    <Option value="QUARTERLY">Trimestral</Option>
                                                    <Option value="SEMIANNUALLY">Semestral</Option>
                                                    <Option value="YEARLY">Anual</Option>
                                                </Select>
                                            )}
                                        />
                                    </Form.Item>
                                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Forma de Pagamento">
                                        <Controller
                                            name="forma_pagamento"
                                            control={control}
                                            render={({ field }) => (
                                                <Select {...field} placeholder="Forma de Pagamento">
                                                    <Option value="BOLETO">Boleto</Option>
                                                    <Option value="CREDIT_CARD">Cartão de Crédito</Option>
                                                    <Option value="PIX">PIX</Option>
                                                    <Option value="UNDEFINED">Definir no pagamento</Option>
                                                </Select>
                                            )}
                                        />
                                    </Form.Item>
                                </div>

                                <Form.Item>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <Button type="primary" htmlType="submit">
                                            Enviar
                                        </Button>
                                        <Button onClick={() => reset()}>Limpar</Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </>,
                    },
                    {
                        label: `Minhas doações`,
                        key: '2',
                        children: items.length > 0 ? <Collapse accordion items={items} /> : <Empty description='Nenhuma doação foi criada' />,
                    },
                    {
                        label: `Como funciona?`,
                        key: '3',
                        children: <>
                            <h2>Como funciona?</h2>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                <img width={120} src={Img} alt="Como funciona?" />
                                <div style={{padding: '5px 30px'}}>
                                    <Paragraph>Através da doação recorrente, você passa a doar periodicamente, você escolhe se será semanal, quinzenal, mensal, trimestral, semestral ou anual, a doação poderá ser de qualquer valor acima de R$5,00.</Paragraph>
                                    <Paragraph>A qualquer momento, você pode editar sua doação, podendo mudar a periodicidade, o vencimento, o valor e a forma de pagamento </Paragraph>
                                    <Paragraph>Além disso, você pode cancelar sua doação a qualquer momento.</Paragraph>
                                </div>
                            </div>


                        </>,
                    }
                ]}
            />
        </Card>
    )
}

export default FormDoacaoRecorrente;

