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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet" />
            </Head>
        </div>
    )
}

export default HomePage