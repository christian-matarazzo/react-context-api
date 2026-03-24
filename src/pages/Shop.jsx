import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Atom } from "react-loading-indicators"

export default function Shop() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100 ">
            <div className="container py-5">
                <h1 className="text-center">Our merch: </h1>
                {products.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Atom color="#56388d" size="medium" text="Just a second..." textColor="#000000" />
                </div>
                    : (
                        <div className="row g-4 justify-content-center" >
                            {products.map(product =>
                                <div className="col col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={product.id}>

                                    <div className="card d-flex flex-column" style={{ width: '16rem' }}>
                                        <img
                                            src={product.image}
                                            className="card-img-top h-100 w-100"
                                            style={{ objectFit: 'contain' }}
                                            alt="Card cap"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <h6 className="card-subtitle mb-2 ">{`${product.price} €`}</h6>
                                            <Link to={`/shop/${product.id}`} className="btn btn-dark btn-lg px-5 my-4 shadow">View More</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
            </div>
        </main>
    )
}

