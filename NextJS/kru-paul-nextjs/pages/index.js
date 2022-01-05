import React, { useState } from "react"
import Head from 'next/head'

import Header from "../components/Header/Header"
import Menus from "../components/Menus/Menus"
import AboutMe from "../components/AboutMe/AboutMe"
import Experiences from "../components/Experiences/Experiences"
import Education from "../components/Education/Education"


function HomePage() {


    return (
        <div>
            <Head>
                <title>Paul Thanataweenont's official website</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            </Head>
        </div >
    )
}

export default HomePage