import React from "react";
import styles from '../Skills/Skills.module.scss'
export default function Skills() {

    return (
        <article>
            <h1 className="topic">Skills</h1>
            <p className="skill">
                <h3 className="skillCategory transition" id="transition">General</h3>
                <div className="skillContent transition" id="transition">
                    <div className="skillFirstLine transition"></div>
                    <div>
                        <p>Mathematical aptitude</p>
                        <p>Problem-solving skills</p>
                        <p>Excellent organizational and time management skills</p>
                        <p>Accuracy and attention to detail </p>
                        <p>Excellent communication skills and teamwork skills</p>

                    </div>
                </div>
            </p>
        </article >
    )
}
