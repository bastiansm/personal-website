import { StackContainer, TechItem } from '../styles/Stack.styled'
import { GradientText, ParaText } from '../styles/Global.styled'
import { LiaHtml5 } from "react-icons/lia";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents"
import { Framer } from "@styled-icons/feather/Framer"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Stack = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <StackContainer>
      <div className="wrapper">
        <GradientText size="2rem" weight="700"
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3, delay: 0.3 }}
        >My TechStack</GradientText>
        <ParaText variant="grey">Tools I currently use for Development.</ParaText>
      </div>
      <div className="wrapper">
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <LiaHtml5 size={60} />
        </TechItem>
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <DiCss3Full size={60} />
        </TechItem>
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <DiJavascript1 size={60} />
        </TechItem>
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 1 }}
        >
          <FaReact size={60} />
        </TechItem>
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <Styledcomponents size={60} />
        </TechItem>
        <TechItem
          ref={ref}
          as={motion.span}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1.4, delay: 1.4 }}
        >
          <Framer size={60} />
        </TechItem>
      </div>
    </StackContainer>
  )
}

export default Stack