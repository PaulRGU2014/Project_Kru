import React from "react"
import styles from '../Footer/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import linkedIn from '../pics/logo/Linkedin.svg'
import facebookLogo from '../pics/logo/Facebook.svg'
import youTubeLogo from '../pics/logo/YouTube.svg'
import instaLogo from '../pics/logo/Instagram.svg'

export default function Footer() {

    return (
        <footer>
            <div className={styles.logosArea}>
                <Link href="https://www.linkedin.com/in/paulrgu2014/">
                    <a className={styles.logo}>
                        <div>
                            <Image
                                src={linkedIn}
                                alt=""
                            // layout="responsive"
                            />
                        </div>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/PaulChemistryTH/">
                    <a className={styles.logo}>
                        <div>
                            <Image
                                src={facebookLogo}
                                alt="" />
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/c/PaulsChemistryThailand">
                    <a className={styles.logo}>
                        <div>
                            <Image
                                src={youTubeLogo}
                                alt="" />
                        </div>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/paulchemmania/">
                    <a className={styles.logo}>
                        <div>
                            <Image
                                src={instaLogo}
                                alt="" />
                        </div>
                    </a>
                </Link>
            </div>
            <div className={styles.logosArea}>
                <p>Designed and coded by Paul Thanataweenont</p>
            </div>

        </footer >

    )
}

