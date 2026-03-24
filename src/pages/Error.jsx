import { Link } from "react-router-dom"
export default function Error() {
    return (
        <main className="d-flex min-vh-100 justify-content-center align-items-center ">
            <div className="container text-center  ">
                <h1>OPS!</h1>
                <h2>Seems something went wrong.</h2>
                <Link to="/" className="btn btn-dark btn-lg px-5 my-4 shadow">Go back to home</Link>
            </div>
        </main>
    )
}