import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select, Card, Modal, ConfigProvider, Typography } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CurrencyInput } from 'react-currency-mask';

const { Option } = Select;
const MySwal = withReactContent(Swal);


const ModalCampanha = ({ open, handleClose, dadosCampanha }) => {
    // Definindo tokens de design personalizados
const theme = {
    components: {
      Segmented: {
        itemSelectedBg: '#73c4bb',
        itemSelectedColor: '#fff',
      },
      Button: {
        colorPrimary: '#73c4bb',
        colorPrimaryHover: '#97e1d9',
        colorPrimaryActive: '#41958c',
        colorPrimaryFocus: '#41958c',
  
      },
      Input: {
        colorPrimary: '#73c4bb',
        colorPrimaryActive: '#41958c',
        colorPrimaryFocus: '#41958c',
        colorPrimaryHover: '#97e1d9',
      },
      Select: {
        colorPrimary: '#73c4bb',
        colorPrimaryActive: '#41958c',
        colorPrimaryFocus: '#41958c',
        colorPrimaryHover: '#97e1d9',
      },  
      Tabs: {
        colorPrimary: '#73c4bb',
        colorPrimaryActive: '#41958c',
        colorPrimaryFocus: '#41958c',
        colorPrimaryHover: '#97e1d9',
      },
        
    },
  };

  const { handleSubmit, control, reset } = useForm();

  const isMobile = window.innerWidth <= 768;

    console.log(dadosCampanha);
  const onSubmit = (data) => {
      data = {
            ...data,
            externalReference: dadosCampanha?.attributes?.id_campanha,
      };
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

  return (
    <ConfigProvider theme={theme}>
    <Modal
    title="Doação para a campanha "
      open={open}
      onCancel={handleClose}
      footer={null}
    >
    
        <h1 style={{color: '#73c4bb'}}>{dadosCampanha?.attributes?.titulo}</h1>
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
    
    </Modal>
    </ConfigProvider>
);
}

export default ModalCampanha;
