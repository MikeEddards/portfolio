import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import './style.css'
import Particle from './Components/Particle'
import SideNav from './Components/SideNav'



function App() {

  return (
    <HashRouter>
      
        <SideNav/>
        <Particle />
        {routes}
    </HashRouter>
        
       
      

  );
}

export default App;
