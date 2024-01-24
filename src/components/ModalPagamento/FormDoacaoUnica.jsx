import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select, Card } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CurrencyInput } from 'react-currency-mask';
import { useMediaQuery } from 'react-responsive';

const { Option } = Select;
const MySwal = withReactContent(Swal);

const FormDoacaoUnica = ({ isMobile }) => {
    const { handleSubmit, control, reset } = useForm();

    const xs = useMediaQuery({ maxWidth: 575 });
    const sm = useMediaQuery({ minWidth: 576, maxWidth: 767 });
    const md = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const lg = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const xl = useMediaQuery({ minWidth: 1200, maxWidth: 1599 });

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`${import.meta.env.VITE_URL_AXIOS}/createClientAndDonation.php`, data)
            .then((response) => {
                if (response.data.success) {
                    MySwal.fire({
                        title: 'Sucesso!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open(response.data.link, '_blank');
                            reset();
                        }
                    })
                } else {
                    MySwal.fire({
                        title: 'Erro!',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const CardStyle = () => {
        if (xs) {
            return { minHeight: '500px' };
        }
        if (sm) {
            return { minHeight: '500px' };
        }
        if (md) {
            return { minHeight: '500px' };
        }
        if (lg) {
            return { minHeight: '500px' };
        }
        if (xl) {
            return { minHeight: '500px' };
        }
        return { minHeight: '500px' };
    }


    return (
        <Card bordered={false} style={CardStyle}>
            <h1>Formulário de doação única</h1>
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 3 }} label="Nome">
                        <Controller
                            name="nome"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} />}
                        />
                    </Form.Item>
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="CPF/CNPJ">
                        <Controller
                            name="cpfCnpj"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} />}
                        />
                    </Form.Item>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Email">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true, type: 'email' }}
                            render={({ field }) => <Input {...field} />}
                        />
                    </Form.Item>
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Celular">
                        <Controller
                            name="celular"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} />}
                        />
                    </Form.Item>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} name="billingType" label="Método de Pagamento">
                        <Controller
                            name="billingType"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select {...field} placeholder="Selecione o método de pagamento">
                                    <Option value="BOLETO">Boleto</Option>
                                    <Option value="CREDIT_CARD">Cartão de Crédito</Option>
                                    <Option value="PIX">Pix</Option>
                                    <Option value="UNDEFINED">Definir no pagamento</Option>
                                </Select>
                            )}
                        />
                    </Form.Item>
                    <Form.Item style={isMobile ? { width: '100%' } : { flexGrow: 1 }} label="Data de Vencimento">
                        <Controller
                            name="dueDate"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input type="date" {...field} />}
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
        </Card>
    );
}

export default FormDoacaoUnica;
