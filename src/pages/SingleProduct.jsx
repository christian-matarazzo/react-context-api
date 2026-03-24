import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Atom } from "react-loading-indicators";
export default function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.data || response.data.id != id) {
                    navigate("/Error")
                } else { setSingleProduct(response.data) }
            })
            .catch(error => {
                console.log("Errore", console.log(error))
                { navigate("/Error") }
            })
    }, [id, navigate])

    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            {!singleProduct ? (<Atom color="#56388d" size="medium" text="Just a second..." textColor="#000000" />) : (
                <div className="container">
                    <div className="card shadow border-0 mx-auto" style={{ maxWidth: '800px' }}>
                        <div className="row g-0 align-items-center">
                            <div className="col-md-5 p-4">
                                <img
                                    src={singleProduct?.image}
                                    className="img-fluid"
                                    style={{ maxHeight: '350px', width: '100%', objectFit: 'contain' }}
                                    alt={singleProduct?.title} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body p-4">
                                    <div className="mb-2">
                                        <span className="badge bg-success-subtle text-success border border-success-subtle px-3">Avaliable</span>
                                    </div>
                                    <h2 className="card-title fw-bold mb-3">{singleProduct?.title}</h2>
                                    <p className="card-text text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {singleProduct?.description}
                                    </p>
                                    <h3 className="fw-bold text-primary mb-4">
                                        {singleProduct?.price} €
                                    </h3>
                                    <div className="d-grid d-md-flex gap-2">
                                        <button className="btn btn-dark btn-lg px-4 rounded-3 flex-grow-1">
                                            <i className="bi bi-cart-plus me-2"></i>
                                            Add to chart
                                        </button>
                                        <Link to="/shop">
                                            <button
                                                className="btn btn-outline-secondary btn-lg px-4 rounded-3">
                                                Back to shop
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}