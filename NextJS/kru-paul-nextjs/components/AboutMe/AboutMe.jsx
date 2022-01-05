import React from "react";
import styles from '../AboutMe/AboutMe.module.scss'
import Sukhothai from '../pics/menus/AboutMe/Sukhothai.jpg'
import Hiking from '../pics/menus/AboutMe/Hiking.jpg'
import ColoradoSpring from '../pics/menus/AboutMe/ColoradoSpring.jpg'
import ChinaWall from '../pics/menus/AboutMe/ChinaWall.jpg'
import Image from "next/image";

export default function Header() {

    return (
        <article data-tab="AboutMe">

            <h1 className="topic" id="transition">About Me</h1>
            <div className={styles.aboutMeSection}>
                <div className={styles.aboutMeArticle__left}>
                    <p>
                        Hi, my name is Paul Thanataweenont. I am originally
                        from
                        Phuket, Thailand. I currently live
                        in Denver,
                        Colorado with my wife, daughter, dog and cat. I am fluent in English, Thai, and Lao.
                    </p>
                </div>

                {/* <div>
                    <div className={styles.aboutMeImage__sukhothai}>
                    </div>
                </div> */}
                <div className={styles.aboutMeImage}>
                    <Image src={Sukhothai} />
                </div>
            </div>

            <div className={styles.aboutMeSection}>

                <div className={styles.aboutMeImage}>
                    <Image
                        src={Hiking}
                    />
                </div>


                <div className={styles.aboutMeArticle__right}>
                    <p>I am a freelance software developer. My main areas of
                        expertise are with HTML, CSS, JavaScript, and
                        React. I am currently apprenticing with an experienced software engineer to expand my knowledge and
                        skill level
                    </p>
                </div>

            </div>

            <div className={styles.aboutMeSection}>

                <div className={styles.aboutMeImage}>
                    <Image src={ColoradoSpring} />
                </div>

                <div className={styles.aboutMeArticle__right}>
                    <p>I’ve gone through a number of phases in my career,
                        and each phase has allowed me to develop a unique set
                        of skills. In Thailand, I was the founder and owner of Kru Paul Chemistry Learning Center, Kru meaning
                        teacher. My number one asset is my ability to adapt to any challenge that is thrown my way.
                    </p>
                </div>

            </div>

            <div className={styles.aboutMeSection}>
                <div className={styles.aboutMeArticle__left}>
                    <p> I enjoy hiking, exploring nature and watching
                        documentaries. I love taking every opportunity to travel
                        and
                        explore new places and cultures. If you have any questions or want to connect please feel free to
                        reach
                        out
                        <a href="/contact"> here</a>.
                    </p>
                </div>


                <div className={styles.aboutMeImage}>
                    <Image src={ChinaWall} />
                </div>

            </div>
        </article >
    )
}
