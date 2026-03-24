import { NavLink } from "react-router-dom"
import { BudgetContext } from "../context/BudgetContext.jsx"
import {useContext} from "react"
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
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="navbar bg-dark d-flex justify-content-evenly align-items-center py-4">
                        {navBar.map(item => (
                            <NavLink
                                className="text-decoration-none text-white"
                                to={item.path}
                                key={item.id}>
                                {item.text}
                            </NavLink>
                        ))}
                        <button onClick={() => setBudgetMode(budgetMode => !budgetMode)}>{budgetMode? "All Prices":"Under 30€"}</button> {/* set budgetMode */}
                    </div>
                </div>
            </div>
        </header>
    );
}
