import { createPortal } from 'react-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { ContextData } from '../../context/useContext';
import { AboutIcon, ErtebatIcon, HomeIcon, NazarIcon } from '../icons/icons'
import {

    Box,
    Typography,
} from "@mui/material";
import { FaTwitter } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const SidePro = () => {
    const { toggled, setToggled } = ContextData();
    return createPortal(

        <div style={{ display: 'flex', mt: '20px', zIndex: 100, position: 'fixed', height: '100%', minHeight: '400px', direction: 'rtl' }} dir='rtl'>
            <Sidebar rtl onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="all" transitionDuration={3000}>
                <Box
                    component="img"
                    src="pattern-sample.avif"
                    width="242px"
                    className="bg-cover m-1 shadow-md"
                ></Box>
                <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                </Box>

                <Menu className='bg-gray-800 text-white' onClick={() => setToggled(false)}>
                    <MenuItem icon={<HomeIcon />} component={<Link to="/" />}> خانه</MenuItem>
                    <MenuItem icon={<AboutIcon />} component={<Link to="/about" />}> درباره من</MenuItem>
                    <MenuItem icon={<NazarIcon />} component={<Link to="/nazarat" />}>نظرات</MenuItem>
                    <MenuItem icon={<ErtebatIcon />} component={<Link to="/ertebat" />}>ارتباط با من</MenuItem>
                </Menu>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                    <Typography sx={{ mx: 1 }}>
                        ما را در شبکه های اجتماعی دنبال کنید
                    </Typography>
                    <Box
                        component="a"
                        href="telegram.com"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            mt: 2,
                            fontSize: "20px",
                        }}
                    >
                        <FaTelegram />
                        <FaTwitter />
                        <FaFacebookSquare />
                        <FaLinkedin />
                        <FaInstagramSquare />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2,
                    }}
                >
                    <Typography>
                        طراحی شده با
                        {""}
                        <FavoriteIcon color="error" />
                    </Typography>
                    <Typography>توسط حسین پیراسبقی</Typography>
                </Box>

            </Sidebar>
            <main style={{ display: 'flex', padding: 10 }}>

            </main>
        </div>
        , document.getElementById('side-bar'));
}
export default SidePro;