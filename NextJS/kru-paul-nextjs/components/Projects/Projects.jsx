import React from "react";
import styles from '../Projects/Projects.module.scss'
import Link from 'next/link'
export default function Projects() {

    return (

        <article>

            <h1 className="topic">Projects</h1>
            <div className={styles.paulSection}>

                <Link href="https://codepen.io/paul-t-thanataweenont/pen/YzVpOZB">
                    <a className={styles.projectPanel}
                        id="transition">
                        Training Project Tabs and Data web development
                    </a>
                </Link>
                <Link href="">
                    <a className={styles.projectPanel} id="transition">Udemy Coursework Yelpcamp</a>
                </Link>
                <Link href="">
                    <a className={styles.projectPanel} id="transition">React Application</a>
                </Link>
                <Link href="https://github.com/PaulRGU2014/Project_Kru">
                    <a className={styles.projectPanel} id="transition"
                    >Krupaul.com Coding Repository on Github
                    </a>
                </Link>
                <Link href="">
                    <a className={styles.projectPanel} id="transition">Masters degree dissertation
                        SAGD Technique for Heavy Oil Extraction</a>
                </Link>

            </div>

        </article>

    )
}
