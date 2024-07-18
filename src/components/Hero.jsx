import { GradientText, ParaText } from "../styles/Global.styled"
import { HeroContainer } from "../styles/Hero.styled"
import { ShapeContainer } from "../styles/Shape.styled"
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <HeroContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <ShapeContainer
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <ParaText
                as={motion.p}
                variant="grey"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Hi there 👋 i'm Bastian, Frontend Engineer
            </ParaText>
            <GradientText
                as={motion.h1}
                size="4rem"
                weight="600"
                className="HeroTitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                I enjoy to building modern design and interactive websites.
            </GradientText>
        </HeroContainer>
    )
}

export default Hero