import { Link, Outlet } from "react-router-dom";

function Nav() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Termékek</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kapcsolat</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Nav;