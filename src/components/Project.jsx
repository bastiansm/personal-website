import React from 'react'
import { ProjectContainer, ProjectIcon, ProjectItem } from '../styles/Project.styled'
import { GradientText, ParaText } from '../styles/Global.styled'
import { Btn2 } from '../styles/Btn.styled'
import { LiaHtml5 } from "react-icons/lia";
import { DiCss3Full, DiJavascript1, DiGithubBadge } from "react-icons/di";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Project = () => {
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
        <ProjectContainer>
            <div className="wrapper">
                <GradientText size="2rem" weight="700">Higlight Project</GradientText>
                <ParaText variant="grey">These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.</ParaText>
            </div>
            <div className="wrapper">
                <ProjectItem
                    href='#'
                    ref={ref}
                    as={motion.a}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <div className="item-wrap">
                        <ProjectIcon><LiaHtml5 size={20} /></ProjectIcon>
                        <ProjectIcon><DiCss3Full size={20} /></ProjectIcon>
                        <ProjectIcon><DiJavascript1 size={20} /></ProjectIcon>
                    </div>
                    <div className="item-wrap">
                        <ParaText weight="600">Project 1</ParaText>
                        <ParaText variant="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim!</ParaText>
                    </div>
                </ProjectItem>
                <ProjectItem
                    href='#'
                    ref={ref}
                    as={motion.a}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="item-wrap">
                        <ProjectIcon><LiaHtml5 size={20} /></ProjectIcon>
                        <ProjectIcon><DiCss3Full size={20} /></ProjectIcon>
                        <ProjectIcon><DiJavascript1 size={20} /></ProjectIcon>
                    </div>
                    <div className="item-wrap">
                        <ParaText weight="600">Project 1</ParaText>
                        <ParaText variant="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim!</ParaText>
                    </div>
                </ProjectItem>
                <ProjectItem
                    href='#'
                    ref={ref}
                    as={motion.a}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="item-wrap">
                        <ProjectIcon><LiaHtml5 size={20} /></ProjectIcon>
                        <ProjectIcon><DiCss3Full size={20} /></ProjectIcon>
                        <ProjectIcon><DiJavascript1 size={20} /></ProjectIcon>
                    </div>
                    <div className="item-wrap">
                        <ParaText weight="600">Project 1</ParaText>
                        <ParaText variant="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim!</ParaText>
                    </div>
                </ProjectItem>
            </div>
            <div className="wrapper">
                <Btn2 href="https://github.com/bastiansm" target="_blank"><DiGithubBadge size={25} />More on GitHub</Btn2>
            </div>
        </ProjectContainer>
    )
}

export default Project