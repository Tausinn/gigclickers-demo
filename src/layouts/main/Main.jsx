
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';

// import Header from '../../Shared/Navbar';
// import Footer from '../../Shared/Footer';


const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login') 
    const noHeader = location.pathname.includes('login') 
    return (
        <div >
           {/* {noHeader ||  <Header></Header> } */}
                <Outlet />
           {noHeader || <Footer></Footer>} 
        </div>
    );
};

export default Main;