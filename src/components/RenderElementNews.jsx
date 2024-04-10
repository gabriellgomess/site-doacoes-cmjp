import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import { Image } from '@mui/icons-material';

const renderElementNews = (element, index) => {
  switch (element.type) {

    case 'heading':
      let variant = 'body1'; // Defina o variant padrão para níveis não especificados
      let color_text = '';
      let font_text = '';
      if (element.level === 1) {
        variant = 'h1';
        color_text = 'texto_verde';
        font_text = 'Staatliches';
      } else if (element.level === 2) {
        variant = 'h2';
        color_text = 'texto_verde';
        font_text = 'Staatliches';
      } else if (element.level === 3) {
        variant = 'h3';
        color_text = 'texto_verde';
        font_text = 'Staatliches';
      } else if (element.level === 4) {
        variant = 'h4';
        font_text = 'Staatliches';
      }else if (element.level === 5) {
        variant = 'h5';
        color_text = 'texto_verde';
        font_text = 'Staatliches';
      }else if (element.level === 6) {
        variant = 'h6';
        font_text = 'Staatliches';
      }

      return (
        <Typography className={color_text} key={index} variant={variant} sx={{fontFamily: font_text}}>
          {element.children.map((child, idx) => renderElementNews(child, idx))}
        </Typography>
      );
    case 'list':
      return (
        <List key={index} component={element.format === 'ordered' ? 'ol' : 'ul'}>
          {element.children.map((child, idx) => renderElementNews(child, idx))}
        </List>
      );
    case 'list-item':
      return (
        <ListItem key={index}>
          <ListItemText>
            {element.children.map((child, idx) => renderElementNews(child, idx))}
          </ListItemText>
        </ListItem>
      );
    case 'image':
      return (
        <Box key={index} sx={{
          background: `url(https://srv493870.hstgr.cloud${element.imagem.data[0].attributes.url})`,
          backgroundSize: 'cover',
          width: { xs: '100%', md: '80%' },
          height: { xs: '200px', md: '500px' },
          margin: '25px auto',
        }}></Box>
      );
    case 'paragraph':
      return (
        <Typography
          key={index}
          paragraph
          sx={{
            fontFamily: 'BarlowRegular',
            fontWeight: 'bold',
            fontSize: { xs: '16px', md: '18px' },
          }}
        >
          {element.children.map((child, idx) => {
            // Verifica se o tipo é 'text'
            if (child.type === 'text') {
              return (
                <span key={idx} style={{ fontWeight: child.bold ? 'bold' : 'normal' }}>
                  {child.text}
                </span>
              );
            } else {
              // Se não for 'text', verifica se a URL é válida
              const isUrlValid = isValidUrl(child.url);
              return isUrlValid ? (
                <a href={child.url} key={idx} target="_blank">{child.children[0].text}</a>
              ) : (
                // Renderiza o texto como está, caso não seja uma URL válida
                <span key={idx}>{child.text}</span>
              );
            }
          })}
        </Typography>
      );
    case 'text':
      return (
        <span key={index} style={{ fontWeight: element.bold ? 'bold' : 'normal' }}>
          {element.text}
        </span>
      );

    default:
      return null;
  }
};

// Função para validar se o texto é uma URL
function isValidUrl(string) {

    let teste = new URL(string);

    if(teste.origin === "null"){
      return false;
    }else{
      return true;
    }
  
  
}

const renderContent = (editorJson) => {
  return editorJson?.map((element, index) => renderElementNews(element, index));
};

const ContentRenderer = ({ editorJson }) => {
  return <div>{renderContent(editorJson)}</div>;
};

export default ContentRenderer;
