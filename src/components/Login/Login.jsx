import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/base/Button";
import { Avatar } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styled from "styled-components";
import "./style.css";

//styled components
const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #77aca2;
`;

const InputTextStyle = styled(TextField)({
  "& label.Mui-focused": {
    color: "#031926",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#77ACA2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "",
    },
    "&:hover fieldset": {
      borderColor: "#468189",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#77ACA2",
    },
  },
});

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token;
    try {
      const response = await axios({
        url: "http://localhost:3000/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          user,
          pass,
        },
      });

      //guarda o token no localstorage
      const tokenData = response.data.token;
      localStorage.setItem("token", tokenData);

      navigate("/");
      console.log(response);
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000, // Fechar automaticamente após 5 segundos
        hideProgressBar: false, // Mostrar barra de progresso
        closeOnClick: true, // Fechar ao clicar
        pauseOnHover: true, // Pausar ao passar o mouse
        draggable: true, // Permitir arrastar
        theme: "colored", // Tema
      });
      console.log(error);

      return;
    }
  };

  return (
    <FormContainer>
      <h1 className="text-5xl">E-escola</h1>
      <h2>Entrar</h2>
      <Avatar sx={{ bgcolor: "#031926" }}>
        <AssignmentIcon />
      </Avatar>
      <form className="form-login" action="">
        <InputTextStyle
          id="outlined-basic"
          label="Login"
          variant="outlined"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <InputTextStyle
          id="outlined-basic"
          type="password"
          label="Senha"
          variant="outlined"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button
          className="w-36 h-10  bg-[#9DBEBB] hover:bg-[#468189] duration-300 text-[#031926] hover:text-[#ffffff]"
          type="submit"
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <ToastContainer />
      </form>
    </FormContainer>
  );
};

export default Login;
