export default function AppFooter() {
    
    return (
        <footer>
            <div className="container-fluid">
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-6 bg-dark text-white h-100 py-4">
                    <div className="col">
                        <p className="h4">Usefull Link</p>
                        <ul>
                            <li>
                                <a className=" text-decoration-none text-white" href="#">Term of use</a>
                            </li>
                            <li>
                                <a className=" text-decoration-none text-white" href="#">Cookies</a>
                            </li>
                            <li>
                                <a className=" text-decoration-none text-white" href="#">Where to find</a>
                            </li>
                            <li>
                                <a className=" text-decoration-none text-white" href="#">Work with us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="h4">Contacts</p>
                        <ul className="list-unstyled">
                            <li>
                                <p>Reacta@onlineshop.eu</p>
                                <p>Chris@onlineshop.eu</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}