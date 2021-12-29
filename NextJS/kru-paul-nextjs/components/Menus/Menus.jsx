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
            <div> <Link href='/about'>
                <a className={styles.ImageButton} data-tab="AboutMe" id="menu">
                    <Image src={AboutMeImage} alt="About Me" className={styles.ImageButton} />
                    <h3 className={styles.textButton}>About Me</h3>
                </a>
            </Link>
                <Link href='/experiences'>
                    <a className={styles.ImageButton} data-tab="Experiences" id="menu">
                        <Image src={ExperiencesImage} alt="Experiences" className={styles.ImageButton} />
                        <h3 className={styles.textButton}>Experiences</h3>
                    </a>
                </Link>
                <Link href='/skills'>
                    <a className={styles.ImageButton} data-tab="Skills" id="menu">
                        <Image src={SkillsImage} alt="Skills" className={styles.ImageButton} />
                        <h3 className={styles.textButton}>Skills</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href='/projects'>
                    <a className={styles.ImageButton} data-tab="Projects" id="menu">
                        <Image src={ProjectsImage} alt="Projects" className={styles.ImageButton} />
                        <h3 className={styles.textButton}>Projects</h3>
                    </a>
                </Link>
                <Link href='/education'>
                    <a className={styles.ImageButton} data-tab="Education" id="menu">
                        <Image src={EducationImage} alt="Education" className={styles.ImageButton} />
                        <h3 className={styles.textButton}>Education</h3>
                    </a>
                </Link>
                <Link href='/contact'>
                    <a className={styles.ImageButton} data-tab="Contact" id="menu">
                        <Image src={ContactImage} alt="Contact" className={styles.ImageButton} />
                        <h3 className={styles.textButton}>Contact</h3>
                    </a>
                </Link>
            </div>
        </nav>
    )

}





