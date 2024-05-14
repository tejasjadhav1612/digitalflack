import "./Navbar.css"
import logo from "../assets/digitalflack_logo.png";
// import profile from "../assets/profile.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar= () => {
    return (
        <>

            <div className="nav">
                {/* <div className="logo">this is div</div> */}
                <div className="digi-logo">
                    <img src={logo} alt="this is logo" />
                </div>
                <div className="profile-logo">
                    {/* <img src={profile} alt="this is profile-logo"/> */}
                    <AccountCircleOutlinedIcon />
                </div>
            </div>
           
        </>
    );
}

export default Navbar;