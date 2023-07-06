import { Link } from 'react-router-dom';
import phone from './phone-call.png';
import email from './email.png';
import './Footer.css';


const Footer = () => {

    const language = localStorage.getItem('language')



       if(language === 'LT') {
        return(
            <footer>
    
                <div className='footer_con_link_log_wrap'>
                   <div className='footer_contacts_wrap'>
                        <h1>Kontaktai</h1>
                        <div className='footer_contacts'>
                            <div className='footer_phone'><span>&#9743;</span> <span className='push'>+370 123 12311</span></div>
                            <div className='footer_email'><span>&#128231;</span> <span className='push'>potato@potato.com</span></div>                        
                        </div>
                </div>
    
                <div className='footer_links_wrap'>
                    <h1>Nuorodos</h1>
                        <div className='footer_links'>
                            <Link to='/' >Pagrindinis</Link>
                            <Link to='/' >Apie</Link>
                            <Link to='/' >Parduotuve</Link>
                        </div>
                </div>
    
                <div className='footer_logos_wrap'>
                    <h1>Logos</h1>
                </div> 
                </div>
    
                <div className='copy_rigths'>
                        @ 2023 Neringa
                </div>
                
            </footer>
         )
       }else if (language === 'ENG') {
        return(
            <footer>
    
                <div className='footer_con_link_log_wrap'>
                   <div className='footer_contacts_wrap'>
                        <h1>Contacts</h1>
                        <div className='footer_contacts'>
                            <div className='footer_phone'><span>&#9743;</span> <span className='push'>+370 123 12311</span></div>
                            <div className='footer_email'><span>&#128231;</span> <span className='push'>potato@potato.com</span></div>                        
                        </div>
                </div>
    
                <div className='footer_links_wrap'>
                    <h1>Links</h1>
                        <div className='footer_links'>
                            <Link to='/' >Main</Link>
                            <Link to='/' >About</Link>
                            <Link to='/' >Shop</Link>
                        </div>
                </div>
    
                <div className='footer_logos_wrap'>
                    <h1>Logos</h1>
                </div> 
                </div>
    
                <div className='copy_rigths'>
                        @ 2023 Neringa
                </div>
                
            </footer>
         )
       }else {
        return(
            <footer>
    
                <div className='footer_con_link_log_wrap'>
                   <div className='footer_contacts_wrap'>
                        <h1>Контакты</h1>
                        <div className='footer_contacts'>
                            <div className='footer_phone'><span>&#9743;</span> <span className='push'>+370 123 12311</span></div>
                            <div className='footer_email'><span>&#128231;</span> <span className='push'>potato@potato.com</span></div>                        
                        </div>
                </div>
    
                <div className='footer_links_wrap'>
                    <h1>Ссылки</h1>
                        <div className='footer_links'>
                            <Link to='/' >Основной</Link>
                            <Link to='/' >Информация</Link>
                            <Link to='/' >Магазин</Link>
                        </div>
                </div>
    
                <div className='footer_logos_wrap'>
                    <h1>Logos</h1>
                </div> 
                </div>
    
                <div className='copy_rigths'>
                        @ 2023 Neringa
                </div>
                
            </footer>
         )
       }
        
    
   
}

export default Footer;