import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import { Image } from '@mui/icons-material';

const renderElement = (element, index) => {
  switch (element.type) {
   
    case 'heading':
      return (
        <Typography key={index} variant={`h${element.level}`}>
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
        <img key={index} src={element.url} alt={element.alt} />
      );
    case 'paragraph':
    return (
        <Typography key={index} paragraph>
        {element.children.map((child, idx) => (
            <span key={idx} style={{ fontWeight: child.bold ? 'bold' : 'normal' }}>
            {child.text}
            </span>
        ))}
        </Typography>
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
