import { Routes, Route} from "react-router-dom"
import Home from "./Components/MainComponents/Home/Home";
import { useState, useEffect } from "react";
import Layout from "./Components/Layout/Layout";

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
      element : <div>2</div>
  },
    {
        path : 'shop',
        element : <div>3</div>
    },
    {
      path : 'Contacts',
      element : <div>4</div>
  },
    {
      path : '*',
      element : <div>wrong path</div>
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
