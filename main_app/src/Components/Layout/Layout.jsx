import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";


const Layout = ({ children }) => {
    return(      
        <div className="body">

            <div className="nav_wrap">
                <Nav />
            </div>
        
            <div className="page-main-wrap">
                {children} 
            </div>

            <div className="footer_wrap">
                <Footer />
            </div>
         

        </div>
    )
}

export default Layout;