import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem'
import "../styles/components/pages/NovedadesPage.css"

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      // const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades');
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);


  return (
    <section className="holder2">
      <h2 className='title1'>Novedades<hr></hr></h2> 
      {loading ? (
        <p>Cargando...</p>        
      ) : (
        novedades.map(item => <NovedadItem key={item.id}
          title={item.Restaurante} subtitle={item.Show}
          body={item.Date} imagen={item.imagen} />)
        )}
    </section>
  )
}

export default NovedadesPage;