

import { useContext } from "react"
import {BudgetContext} from "../context/BudgetContext"
export default function AboutUs() {





    return (
        <main>
            <div className="container min-vh-100 justify-content-center d-flex">
                <div className="row row-cols-1 mt-5">
                    <div className="col d-flex flex-column align-items-start">
                        <h1>Our Vision: </h1>
                        <p className="h4 w-50">At Reacta, we believe that shopping should be as fast and fluid as the technology that powers it. Founded by our CEO with a single goal in mind—to bridge the gap between high-end tech and everyday accessibility—Reacta is not just a store; it is a seamless digital experience.</p>
                    </div>

                    <div className="col d-flex flex-column align-items-center mt-5">
                        <h2 className="h1">: Our Commitment : </h2>
                        <p className="h4 w-50 text-center">Guided by a vision of a borderless digital marketplace, Reacta has become a benchmark for SPA (Single Page Application) excellence in the retail world. We are committed to transparency, quality, and the relentless pursuit of digital perfection.</p>
                    </div>
                    <div className="col d-flex flex-column align-items-end mt-5">
                        <h3 className="mt-5 h1">: The Reacta Edge </h3>
                        <p className="h4 w-50 text-end">Why "Reacta"? Because we believe in responsiveness. In a world that moves at lightning speed, your e-commerce platform should never keep you waiting. Built on the pillars of modern web architecture, our store ensures that finding your next favorite product is intuitive, secure, and—above all—instant.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}