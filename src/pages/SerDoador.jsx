import React, { useState, useContext } from 'react';
import ContextAPI from '../components/ContextAPI';
import { ConfigProvider, Segmented } from 'antd';
import { useMediaQuery } from 'react-responsive';

// Import components
import FormDoacaoUnica from '../components/ModalPagamento/FormDoacaoUnica';
import DoacaoRecorrente from '../components/ModalPagamento/DoacaoRecorrente';
import DoacaoIR from '../components/ModalPagamento/DoacaoIR';


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

const SerDoador = () => {
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

        <ConfigProvider theme={theme}>
            <div style={{width: isMobile?'100%':'70%', margin: '0 auto'}}>                
                <Segmented
                    options={['Doação Única', 'Doação Recorrente', 'Doação IR']}
                    onChange={(value) => setSelectedOption(value)}
                    style={{ margin: isMobile ? '2px' : '10px', backgroundColor: '#fff' }}
                />
                <div style={{ minHeight: '600px' }}>
                    {renderContent()}
                </div>
            </div>
        </ConfigProvider>

    );
};

export default SerDoador;
