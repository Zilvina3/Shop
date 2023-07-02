import { Routes, Route} from "react-router-dom"
import Home from "./Components/MainComponents/Home/Home";
import { useState, useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import About from "./Components/MainComponents/About/About";
import Shop from "./Components/MainComponents/Shop/Shop";
import Contacts from "./Components/MainComponents/Contacts/Constacts";
import './App.css';

function App() {

  const [lang, setLang] = useState(localStorage.getItem('language'))

  useEffect(() => {
    if(!lang) {
     setLang(localStorage.setItem('language', 'LT'))  
    }
    }, [])


    const routes = [
    {
        path : '/',
        element : <Layout children={<Home />} />
    },
    {
      path : '/about',
      element : <Layout children={<About />} />
  },
    {
        path : 'shop',
        element : <Layout children={<Shop />} />
    },
    {
      path : 'Contacts',
      element : <Layout children={<Contacts />} />
  },
    {
      path : '*',
      element : <Layout children={<div>wrong path</div>} />
  },
];
  


  return (
    <Routes>
      {routes.map((route, key) => {
        return(
          <Route key={key}
          path={route.path}
          element={route.element}
           /> 
        )      
      })}          
    </Routes>
  );
}

export default App;
