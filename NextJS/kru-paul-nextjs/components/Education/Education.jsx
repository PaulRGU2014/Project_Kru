import React from "react";
import styles from '../Experiences/Experiences.module.scss'

export default function Education() {

    return (
        <article data-tab="Experiences">
            <div>
                <h1 className='topic' id="transition">Education</h1>
            </div>
            <div div className={styles.wrapper}>
                <div className={styles.timeline}>
                    <div className={styles.timelineYear}>
                        <h3>2002-2008</h3>
                    </div>
                    <div className={styles.timelineStone}></div>
                    <div className={styles.timelineContent}>
                        <p>The Demonstration School of Ramkhamheang University</p>
                        <p>High School Diploma</p>
                    </div>
                </div>
            </div>
            <div div className={styles.wrapper}>
                <div className={styles.timeline}>
                    <div className={styles.timelineYear}>
                        <h3>2008-2012</h3>
                    </div>
                    <div className={styles.timelineStone}></div>
                    <div className={styles.timelineContent}>
                        <p>Silpakorn University</p>
                        <p>B.Eng (Petrochemicals and Polymeric Materials)</p>
                    </div>
                </div>
            </div>
            <div div className={styles.wrapper}>
                <div className={styles.timeline}>
                    <div className={styles.timelineYear}>
                        <h3>2014-2016</h3>
                    </div>
                    <div className={styles.timelineStone}></div>
                    <div className={styles.timelineContent}>
                        <p>Robert Gordon University</p>
                        <p>M.Sc (Oil and Gas Engineering)</p>
                    </div>
                </div>
            </div>
            <div div className={styles.wrapper}>
                <div className={styles.timeline}>
                    <div className={styles.timelineYear}>
                        <h3>2020-Present</h3>
                    </div>
                    <div className={styles.timelineStone}></div>
                    <div className={styles.timelineContent}>
                        <p>Udemy Self-Study</p>
                        <p><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank"
                            rel="noopener noreferrer">The Web Developer Bootcamp
                            2021</a></p>
                        <p><a href="https://www.udemy.com/course/react-redux/">Modern React with Redux</a></p>

                    </div>
                </div>
            </div>

        </article>
    )
}