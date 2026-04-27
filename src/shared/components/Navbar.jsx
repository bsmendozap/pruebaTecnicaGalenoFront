import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-slate-800">
        Prueba Galeno
      </h1>

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