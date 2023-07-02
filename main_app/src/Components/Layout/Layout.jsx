import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";


const Layout = ({ children }) => {
    return(      
        <div className="body">

        <Nav />
            <div className="page-main-wrap">
                {children} 
            </div>
        <Footer /> 

        </div>
    )
}

export default Layout;