import React from "react";
import styles from '../Skills/Skills.module.scss'
export default function Skills() {

    return (
        <article>
            <h1 className="topic">Skills</h1>
            <div className={styles.skill}>
                <div className={styles.skillVertLine}></div>
                <div className={styles.categoryWrapper}>
                    <h3 className={styles.skillCategory}>General</h3>
                </div>
                <div className={styles.skillContentWrapper}>
                    <p className={styles.skillContent}>Mathematical aptitude</p>
                    <p className={styles.skillContent}>Problem-solving skills</p>
                    <p className={styles.skillContent}>Excellent organizational and time management skills</p>
                    <p className={styles.skillContent}>Accuracy and attention to detail </p>
                    <p className={styles.skillContent}>Excellent communication skills and teamwork skills</p>
                </div>
            </div>

            <div className={styles.skill}>
                <div className={styles.skillVertLine}></div>
                <div className={styles.categoryWrapper}>
                    <h3 className={styles.skillCategory}>Coding</h3>
                </div>
                <div className={styles.skillContentWrapper}>
                    <p className={styles.skillContent}>Writing and testing code</p>
                    <p className={styles.skillContent}>Programming languages- HTML, CSS, JavaScript</p>
                    <p className={styles.skillContent}>Use of data structures and algorithms</p>
                    <p className={styles.skillContent}>Use of source control and text editors</p>
                    <p className={styles.skillContent}>Working with databases and managing secure records</p>
                </div>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillVertLine}></div>
                <div className={styles.categoryWrapper}>
                    <h3 className={styles.skillCategory}>Other</h3>
                </div>
                <div className={styles.skillContentWrapper}>
                    <p className={styles.skillContent}>Proficient in Adobe Photoshop, After Effects, Illustrator and Premiere</p>
                    <p className={styles.skillContent}>Proficient in computer diagnostic and repair</p>
                    <p className={styles.skillContent}>Proficient in Microsoft Office Suite</p>

                </div>
            </div>

        </article >
    )
}
