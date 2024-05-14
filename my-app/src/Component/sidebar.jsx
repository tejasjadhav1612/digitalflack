import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined'
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <div className="content"  >
                <div className="sidebar">
                    <Link to="/" >
                        <CottageOutlinedIcon />Home</Link>
                    <Link to="/state"><HolidayVillageOutlinedIcon />
                        State</Link>
                    <Link to="/city"><ApartmentOutlinedIcon />
                        City
                    </Link>
                    <Link to="/warehouse"><StoreMallDirectoryOutlinedIcon />
                        Warehouse
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Sidebar;