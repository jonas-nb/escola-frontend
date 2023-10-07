import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import PainelAluno from "./components/Alunos/PainelAluno";
import CadastroAluno from "./components/Alunos/Cadastro/CadastroAluno";
import ConsultaAluno from "./components/Alunos/Consulta/ConsultaAluno";
import "react-toastify/dist/ReactToastify.css";
import Dash from "./components/Painel/Dash";
import styled from "styled-components";
import Home from "./components/Home/HomePage.jsx";
import Error404 from "./components/Page404/Error404";
import AlunoMain from "./components/Alunos/AlunoPage/AlunoMain";
import AlunoComplete from "./components/Alunos/AlunoPage/AlunoComplete";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Menu = styled.div`
  width: 200px;
  background-color: #031926;
  color: white;
`;

const Content = styled.div`
  flex: 1;
  background-color: #dafffd;
`;

const App = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return (
    <Container>
      {!isLoginRoute && <Menu className="rounded-r-sm">{<Dash />}</Menu>}
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aluno" element={<PainelAluno />} />
          <Route path="/aluno/cadastro" element={<CadastroAluno />} />
          <Route path="/aluno/lista" element={<ConsultaAluno />} />
          <Route path="/aluno/:id" element={<AlunoMain />} />
          <Route
            path="/aluno/:id/informacoes-completas"
            element={<AlunoComplete />}
          />
        </Routes>
      </Content>
    </Container>
  );
};

export default App;
