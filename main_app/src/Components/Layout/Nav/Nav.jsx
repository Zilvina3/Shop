import { Link, useNavigate } from "react-router-dom";


const Nav = () => {

    const navigationEN = [
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

    console.log(curLinkPath)

    if(language === 'LT') {
        return(
           <nav className="lt">
            <select className="EN-LT-RU" onChange={(e) => {
                localStorage.setItem('language', e.target.value)
                window.location.reload(false);
            }}>            
                <option value="LT">LT</option>
                <option value="ENG">ENG</option>
                <option value="RU">RU</option>
            </select>
            

            <div className="nav-link-wrap">
            {navigationLT.map((link, num) => {
                    return(
                        <Link className={link.path === curLinkPath ? 'curLink': null} key={num} title={link.name === 'Kontaktai ir Rezervacija' ? link.name + ' &#128394;' : link.name} to={link.path} >{link.name === 'Kontaktai ir Rezervacija' ? link.name : link.name}</Link>
                    )
                })}
            </div>

        </nav> 
        )
}
}

export default Nav;