import { Outlet } from "react-router-dom"
import TopBar from "../Component/TopBar"
import Header from "../Component/Header"
import Footer from "../Component/Footer"

function RootLayout() {
    return (
        <>
            <TopBar></TopBar>

            <Header></Header>

            <main className="min-h-screen">
                <Outlet />
            </main>

            <footer className="bg-primary py-4 text-white mt-10">
                <Footer></Footer>
            </footer>

        </>
    )
}

export default RootLayout