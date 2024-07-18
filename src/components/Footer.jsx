import { FooterContainer, FooterWrapper } from "../styles/Footer.styled"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Footer = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -10 }
    };

    const variants2 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 10 }
    };

    return (
        <FooterContainer>
            <FooterWrapper>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span>bastianmrg.eu.org</span>
                    <span>bastianmanurung39@gmail.com</span>
                    <span>&copy; Bastian 2024. All rights reserved.</span>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants2}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a href="https://www.instagram.com/basmrg/" target="_blank">Instagram</a>/
                    <a href="#" target="_blank">LinkedIn</a>/
                    <a href="https://github.com/bastiansm" target="_blank">GitHub</a>
                </motion.div>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer