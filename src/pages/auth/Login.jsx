import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../core/services/authService";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Ingrese correo y contraseña");
      return;
    }

    try {
      setCargando(true);

      const data = await loginService(email, password);

      localStorage.setItem("token", data.token);

      if (data.usuario) {
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Correo o contraseña incorrectos");
    } finally {
      setCargando(false);
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      error={error}
      cargando={cargando}
      setEmail={setEmail}
      setPassword={setPassword}
      iniciarSesion={iniciarSesion}
    />
  );
};

export default Login;