import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario")
        navigate("/login");
    };

    return (
        <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">

            <div className="flex items-center gap-6">

                <h1 className="text-xl font-bold text-slate-800">
                    Prueba Galeno
                </h1>

                <   Link to="/dashboard" className="text-slate-600 hover:text-blue-600">
                    DASHBOARD
                </Link>

                <Link to="/products" className="text-slate-600 hover:text-blue-600">
                    PRODUCTOS
                </Link>


            </div>


            <button
                onClick={cerrarSesion}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
            >
                Cerrar sesión
            </button>
        </nav>
    );
};

export default Navbar;