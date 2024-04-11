import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import { Image } from '@mui/icons-material';

const renderElement = (element, index) => {
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
        font_text = 'Staatliches';
      }else if (element.level === 6) {
        variant = 'h6';
        font_text = 'Staatliches';
      }

      return (
        <Typography className={color_text} key={index} variant={variant} sx={{fontFamily: font_text}}>
          {element.children.map((child, idx) => renderElement(child, idx))}
        </Typography>
      );
    case 'list':
      return (
        <List key={index} component={element.format === 'ordered' ? 'ol' : 'ul'}>
          {element.children.map((child, idx) => renderElement(child, idx))}
        </List>
      );
    case 'list-item':
      return (
        <ListItem key={index}>
          <ListItemText>
            {element.children.map((child, idx) => renderElement(child, idx))}
          </ListItemText>
        </ListItem>
      );
    case 'image':
      return (
        <Box key={index} sx={{
          background: `url(${element.image.url})`,
          backgroundSize: 'cover',
          width: { xs: '100%', md: '80%' },
          height: { xs: '200px', md: '550px' },
          margin: '25px auto',
        }}></Box>
      );
    case 'paragraph':
      return (
        <Typography key={index} paragraph sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '18px', md: '22px' } }}>
          {element.children.map((child, idx) => (
            <span key={idx} style={{ fontWeight: child.bold ? 'bold' : 'normal' }}>
              {child.text}
            </span>
          ))}
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

const renderContent = (editorJson) => {
  return editorJson.map((element, index) => renderElement(element, index));
};

const ContentRenderer = ({ editorJson }) => {
  return <div>{renderContent(editorJson)}</div>;
};

export default ContentRenderer;
