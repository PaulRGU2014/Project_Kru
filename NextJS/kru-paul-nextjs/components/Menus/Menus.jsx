import React from "react";
import styles from '../Menus/Menus.module.scss'
import Image from 'next/image';
import Link from 'next/link'
import AboutMeImage from '../pics/menus/AboutMe/AboutMe.jpg';
import ExperiencesImage from '../pics/menus/Experiences.jpg';
import SkillsImage from '../pics/menus/Skills.jpg'
import ProjectsImage from '../pics/menus/Projects.jpg'
import EducationImage from '../pics/menus/Edu.jpg'
import ContactImage from '../pics/menus/Contact.jpg'

export default function Menus() {

    return (
        <nav className={styles.panel}>
            <div>
                <Link href='/about'>
                    <a className={styles.ImageLink} data-tab="AboutMe" >
                        <Image
                            src={AboutMeImage}
                            alt="About Me"
                            id="menu" />
                        <h3 className={styles.textButton}>About Me</h3>
                    </a>
                </Link>
                <Link href='/experiences'>
                    <a className={styles.ImageLink} data-tab="Experiences">
                        <Image
                            src={ExperiencesImage}
                            alt="Experiences"
                            id="menu" />
                        \                        <h3 className={styles.textButton}>Experiences</h3>
                    </a>
                </Link>
                \                <Link href='/skills'>
                    <a className={styles.ImageLink} data-tab="Skills">
                        \                        <Image src={SkillsImage} alt="Skills" id="menu" />
                        <h3 className={styles.textButton}>Skills</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href='/projects'>
                    <a className={styles.ImageLink} data-tab="Projects">
                        \                        <Image src={ProjectsImage} alt="Projects" id="menu" />
                        <h3 className={styles.textButton}>Projects</h3>
                    </a>
                </Link>
                <Link href='/education'>
                    <a className={styles.ImageLink} data-tab="Education">

                        <Image src={EducationImage} alt="Education" id="menu" />
                        <h3 className={styles.textButton}>Education</h3>
                    </a>
                </Link>
                <Link href='/contact'>
                    <a className={styles.ImageLink} data-tab="Contact">
                        \                        <Image src={ContactImage} alt="Contact" className={styles.ImageButton} id="menu" />
                        <h3 className={styles.textButton}>Contact</h3>
                    </a>
                </Link>
            </div>
        </nav>
    )

}





