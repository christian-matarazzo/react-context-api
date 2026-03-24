import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="min-vh-100 d-flex flex-column justify-content-center bg-light">
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-3 fw-bold">Welcome to Reacta.</h1>
                            <p className="h3 text-muted">Your new look at just one click away.</p>
                            <Link to="/shop" className="btn btn-dark btn-lg px-5 my-4 shadow">
                                Buy now
                            </Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src="/lady-commerce2.png" className="img-fluid " alt="Lady Commerce" />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}