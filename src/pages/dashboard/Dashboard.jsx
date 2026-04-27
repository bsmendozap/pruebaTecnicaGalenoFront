const Dashboard = () => {
  const usuarioGuardado = localStorage.getItem("usuario");
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800">
        Dashboard
      </h2>

      <p className="text-slate-500 mt-2">
        Bienvenido al panel principal.
      </p>

      {usuario && (
        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-slate-700">
            <strong>Email:</strong> {usuario.email}
          </p>

          {usuario.role && (
            <p className="text-slate-700 mt-1">
              <strong>Rol:</strong> {usuario.role}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;