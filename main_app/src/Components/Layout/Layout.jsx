import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Layout = ({ children }) => {
    return(      
        <div className="body">

            <div className="nav_wrap">
                <Nav />
            </div>
        
            <div className="page-main-wrap">
                {children} 
            </div>
            <div className="messenger">
                <MessengerCustomerChat pageId='100094462358932' appId='3530899677167422' />
            </div>

            <div className="footer_wrap">
                <Footer />
            </div>
         

        </div>
    )
}

export default Layout;