import React, { useState, useContext } from 'react';
import ContextAPI from '../ContextAPI';
import { ConfigProvider, Segmented } from 'antd';
import { useMediaQuery } from 'react-responsive';

// Import components
import FormDoacaoUnica from './FormDoacaoUnica';
import DoacaoRecorrente from './DoacaoRecorrente';
import DoacaoIR from './DoacaoIR';

import {Dialog} from '@mui/material';

// Definindo tokens de design personalizados
const theme = {
  components: {
    Segmented: {
      itemSelectedBg: '#08695e',
      itemSelectedColor: '#fff',
    },
    Button: {
      colorPrimary: '#08695e',
      colorPrimaryHover: '#97e1d9',
      colorPrimaryActive: '#41958c',
      colorPrimaryFocus: '#41958c',

    },
    Input: {
      colorPrimary: '#08695e',
      colorPrimaryActive: '#41958c',
      colorPrimaryFocus: '#41958c',
      colorPrimaryHover: '#97e1d9',
    },
    Select: {
      colorPrimary: '#08695e',
      colorPrimaryActive: '#41958c',
      colorPrimaryFocus: '#41958c',
      colorPrimaryHover: '#97e1d9',
    },  
    Tabs: {
      colorPrimary: '#08695e',
      colorPrimaryActive: '#41958c',
      colorPrimaryFocus: '#41958c',
      colorPrimaryHover: '#97e1d9',
    }  
  },
};

const Modal = () => {
  const [selectedOption, setSelectedOption] = useState('Doação Única');
  const { open, setOpen } = useContext(ContextAPI);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const renderContent = () => {
    switch (selectedOption) {
      case 'Doação Única':
        return <FormDoacaoUnica isMobile={isMobile} />;
      case 'Doação Recorrente':
        return <DoacaoRecorrente isMobile={isMobile} />;
      case 'Doação IR':
        return <DoacaoIR isMobile={isMobile} />;
      default:
        return <div>Selecione uma opção</div>;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
    fullWidth={true}
    maxWidth='lg'
    open={open}
    onClose={handleClose}
  >
    <ConfigProvider theme={theme}>
      <>
        <Segmented
          options={['Doação Única', 'Doação Recorrente', 'Doação IR']}
          onChange={(value) => setSelectedOption(value)}
          style={{ margin: '20px ', backgroundColor: '#fff' }}
        />
        <div style={{minHeight: '600px'}}>
          {renderContent()}
        </div>
        
      </>
    </ConfigProvider>
  </Dialog>
  );
};

export default Modal;
