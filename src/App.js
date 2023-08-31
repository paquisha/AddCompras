// App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = (user, token) => {
    setIsLoggedIn(true);
    setUsername(user);
    setAccessToken(token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setAccessToken(null); // Borrar el token al cerrar sesión
  };

  const jsonData = [
    {
      "codigoRetorno": "0001",
      "mensajeRetorno": "Consulta Ok",
      "data":[
        {
          "id": 44,
          "descripcion": "TERNO 2 PIEZAS SECO",
          "precio": "8.5",
          "estado": true,
          "detalle": "El terno de 2 piezas incluyu la leva y el pantalon, el lavado es en seco, se entrega en armador y con se respectiva funda",
          "imagen": "https://static.wixstatic.com/media/d4a9c2_69f79c70ceef434398569467464ec18c~mv2.png/v1/fill/w_539,h_763,al_c,usm_0.66_1.00_0.01/d4a9c2_69f79c70ceef434398569467464ec18c~mv2.png"
        },
        {
          "id": 45,
          "descripcion": "TERNO 3 PIEZAS SECO",
          "precio": "9.5",
          "estado": true,
          "detalle": "El terno de 3 piezas incluyu la leva el chaleco y el pantalon, el lavado es en seco, se entrega en armador y con se respectiva funda",
          "imagen": "https://img.freepik.com/vector-gratis/conjunto-vector-trajes-ropa-negocios-diferentes-colores_1284-42951.jpg?w=740&t=st=1693366888~exp=1693367488~hmac=b1d720fd6b65647e754a34b4b95f7cc3cfabda01bb37e2007bc7e83ea3d6e680"
        },
        {
          "id": 46,
          "descripcion": "LEVA SECO",
          "precio": "4.75",
          "estado": true,
          "detalle": "la leva es lavada en seco con el mayor cuidado de la prenda, se entrega en armador y con se respectiva funda",
          "imagen": "https://img.freepik.com/psd-premium/maqueta-chaleco_353595-277.jpg?w=740"
        },
        {
          "id": 47,
          "descripcion": "CAMISA SECO",
          "precio": "3",
          "estado": true,
          "detalle": "La camisa es lavada en seco con el mayor cuidado de la prenda, se entrega en armador y con se respectiva funda",
          "imagen": "https://img.freepik.com/psd-gratis/maqueta-camiseta-hombre-negro-simple_53876-57893.jpg?w=740&t=st=1693366956~exp=1693367556~hmac=f5a8f5aa7cd78705fa8c5f49db1bbe5c26eac7e8dff8449f77b770421fef978a"
        }
      ]
    }
  ];

  return (
    <Router>
    <div className="App">
       <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
       {isLoggedIn ? (
         <Home data={jsonData[0].data} />
       ) : (
         <LoginForm handleLogin={handleLogin} />
       )}
       <Footer />
    </div>

    </Router>
    // <div className="App">
    //   <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
    //   {isLoggedIn ? (
    //     <Home data={jsonData[0].data} />
    //   ) : (
    //     <LoginForm handleLogin={handleLogin} />
    //   )}
    // </div>
  );
};

export default App;
