import { Link } from "react-router-dom";
import log from './logo_black.png'
import './Nav.css';

const Nav = () => {

    const navigationENG = [
        {
            path : '/',
            name : 'Home'
        },
        {
            path : '/about',
            name : 'About'
        },
        {
            path : '/shop',
            name : 'Shop'
        },
        {
            path : '/contacts',
            name : 'Contacts'
        },
    ]

    const navigationLT = [
        {
            path : '/',
            name : 'Pagrindinis'
        },
        {
            path : '/about',
            name : 'Apie'
        },
        {
            path : '/shop',
            name : 'Parduotuvė'
        },
        {
            path : '/contacts',
            name : 'Kontaktai'
        },
    ]

    const navigationRU = [
        {
            path : '/',
            name : 'Основной'
        },
        {
            path : '/about',
            name : 'Информация'
        },
        {
            path : '/shop',
            name : 'Магазин'
        },
        {
            path : '/contacts',
            name : 'Контакты'
        },
    ]

    const language = localStorage.getItem('language')

    let curLinkPath = window.location.pathname


    if(language === 'LT') {
        return(
           <nav>
            <select className="EN-LT-RU" onChange={(e) => {
                localStorage.setItem('language', e.target.value)
                window.location.reload(false);
            }}>            
                <option value="LT">LT</option>
                <option value="ENG">ENG</option>
                <option value="RU">RU</option>
            </select>
            
            <div className="logo">
               <Link className="link-main-name" title="to home" to='/'><img src={log} alt="Neringa" /></Link>
            </div>

            <div className="nav-link-wrap">
            {navigationLT.map((link, num) => {
                    return(
                        <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.name} to={link.path} >{link.name}</Link>
                    )
                })}
            </div>

        </nav> 
        )
}else if (language === 'RU') {
    return(
        <nav>
         <select className="EN-LT-RU" onChange={(e) => {
             localStorage.setItem('language', e.target.value)
             window.location.reload(false);
         }}>            
             <option value="RU">RU</option>
             <option value="ENG">ENG</option>
             <option value="LT">LT</option>
         </select>
         
         <div className="logo">
            <Link className="link-main-name" title="to home" to='/'><img src={log} alt="Neringa" /></Link>
         </div>

         <div className="nav-link-wrap">
         {navigationRU.map((link, num) => {
                 return(
                     <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.name} to={link.path} >{link.name}</Link>
                 )
             })}
         </div>

     </nav> 
     )
}else {
    return(
        <nav>
         <select className="EN-LT-RU" onChange={(e) => {
             localStorage.setItem('language', e.target.value)
             window.location.reload(false);
         }}>            
             <option value="ENG">ENG</option>
             <option value="RU">RU</option>
             <option value="LT">LT</option>
         </select>
         
         <div className="logo">
            <Link className="link-main-name" title="to home" to='/'><img src={log} alt="Neringa" /></Link>
         </div>

         <div className="nav-link-wrap">
         {navigationENG.map((link, num) => {
                 return(
                     <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.name} to={link.path} >{link.name}</Link>
                 )
             })}
         </div>

     </nav> 
     )
}
}

export default Nav;