import NavBar from '../components/shared/NavBar';
import Login from '../components/UserPage/Login';
import Register from '../components/UserPage/Register';
import Footer from '../components/shared/Footer';
import Contact from '../components/shared/Contact';
const UserPage = (props) => {

    return (
        <>
            <NavBar/>
            <Login/>
            {/* <Register/> */}
            <Contact/>
            <Footer/>
        </>
)}

export default UserPage;