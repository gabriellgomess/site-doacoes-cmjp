import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RenderElementNews from './RenderElementNews';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        axios.get('https://srv493870.hstgr.cloud/api/noticias?populate=*')
            .then((response) => {
                setNoticias(response.data.data);
                console.log("-->", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
        , []);
    return (
        <div style={{padding: '40px 0', width: '80%', margin: '0 auto'}}>
            {noticias.map((noticia, index) => (
                <RenderElementNews key={index} editorJson={noticia?.attributes?.descricao} />
            ))}
        </div>
    );
}

export default Noticias;