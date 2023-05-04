import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>La Caserita</h3>
            <div>
                <button>Pizzas</button>
                <button>Empanadas</button>
                <button>Sanguches</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;