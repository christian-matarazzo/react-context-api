import { NavLink } from "react-router-dom"
export default function AppHeader() {
    const navBar = [
        {
            id: 1,
            text: "Home",
            path: "/"
        },
        {
            id: 2,
            text: "About Us",
            path: "/about-us"
        },
        {
            id: 3,
            text: "Shop",
            path: "/shop"
        },


    ]

    return (
        <header>
            <div className="container-fluid ">
                <div className="row">
                    <div className="navbar bg-dark d-flex justify-content-evenly py-4 ">
                        {navBar.map(item => <NavLink className="text-decoration-none text-white" to={item.path} key={item.id}>{item.text}</NavLink>)}
                    </div>
                </div>
            </div>
        </header>
    )
}