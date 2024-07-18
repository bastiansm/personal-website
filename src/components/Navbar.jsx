import { Btn1 } from "../styles/Btn.styled"
import { GradientText } from "../styles/Global.styled"
import { NavContainer } from "../styles/Navbar.styled"
import { HiPaperAirplane } from "react-icons/hi2";
import { motion } from "framer-motion"
// import { BsRocket, BsBraces } from "react-icons/bs";

const Navbar = () => {
    return (
        <NavContainer
            as={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className="wrapper">
                <a href="/" className="logo">
                    bastianmrg.eu.org
                </a>
                <Btn1 href="mailto:bastianmanurung39@gmail.com" target="_blank"><HiPaperAirplane />Contact</Btn1>
            </div>
        </NavContainer>
    )
}

export default Navbar