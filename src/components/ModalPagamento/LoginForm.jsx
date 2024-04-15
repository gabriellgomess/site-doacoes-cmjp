import { Form, Input, Button, Card, Typography } from 'antd';
import React from 'react';
import Img from '../../assets/img_doacao_recorrente.png';

const LoginForm = ({ handleLogin, handleChangeLogin, handleShowRegister }) => {
  const { Paragraph } = Typography;
  const isMobile = window.innerWidth <= 768;
  return (
    <Card bordered={false} style={{ minHeight: '500px' }}>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', width: '50%', minWidth: '300px' }}>
        {!isMobile && <img width={120} src={Img} alt="Como funciona?" />}
        
        <div style={{ padding: '5px 30px' }}>
          <Paragraph>Através da doação recorrente, você passa a doar periodicamente, você escolhe se será semanal, quinzenal, mensal, trimestral, semestral ou anual, a doação poderá ser de qualquer valor acima de R$5,00.</Paragraph>
          <Paragraph>A qualquer momento, você pode editar sua doação, podendo mudar a periodicidade, o vencimento, o valor e a forma de pagamento </Paragraph>
          <Paragraph>Além disso, você pode cancelar sua doação a qualquer momento.</Paragraph>
        </div>
      </div>
         <Form
        onFinish={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          minWidth: '300px', 
          margin: "0 auto",
          gap: "20px",
        }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor, insira seu usuário!' }]}
        >
          <Input
            placeholder="Usuário"
            onChange={(e) => handleChangeLogin(e)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
        >
          <Input.Password
            placeholder="Senha"
            onChange={(e) => handleChangeLogin(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
          <Button
            style={{ marginLeft: '8px' }}
            onClick={handleShowRegister}>
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
     
      </div>
     
    </Card>
  );
};

export default LoginForm;
