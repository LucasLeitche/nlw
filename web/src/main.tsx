import React from 'react' //Core
import ReactDOM from 'react-dom/client' // Integração do react com o browser
import { App  } from './App'

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render( // Executa o metodo render que coloca a nossa aplicação
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
