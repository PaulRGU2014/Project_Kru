import Header from "./Header/Header"
import Menus from "./Menus/Menus"
import Footer from "./Footer/Footer"
import '../styles/global-style.scss'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Menus />
            <main>{children}</main>
            <Footer />
        </>
    )
}