import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const HomePage = () => {
  const [lastStudents, setLastStudents] = useState([]);
  const [myDate, setMyDate] = useState("");

  useEffect(() => {
    getLastStudents();
    setInterval(() => toDayDate(), 1000);
  }, []);

  const getLastStudents = async () => {
    const response = await axios.get("http://localhost:3000/");
    setLastStudents(response.data);
  };

  function toDayDate() {
    const date = new Date();
    const dateNow = format(date, "dd/MM/yyyy", { locale: ptBR });
    const timeNow = format(date, "HH:mm", { locale: ptBR });

    setMyDate(`${timeNow} ${dateNow}`);
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <h1 className="text-center text-5xl mt-5">Escola Teste</h1>
      <h2 className="text-center text-3xl mt-5">{`Seja Bem vindo ${"user"}`}</h2>
      <div className="mt-10">
        {/* lista de funcionalidades */}
        <div className=" flex gap-5 pl-5">
          <Link to="/aluno/cadastro">
            <div className="flex items-center justify-center gap-2 flex-col drop-shadow-md w-56 h-20 rounded-md bg-gradient-to-b transition-transform transform hover:scale-105 hover:bg-opacity-90 from-teal-300 to-emerald-400">
              Cadastro de Aluno
            </div>
          </Link>
          <Link to="/aluno/lista">
            <div className="flex items-center justify-center gap-2 flex-col drop-shadow-md w-56 h-20 rounded-md bg-gradient-to-b transition-transform transform hover:scale-105 hover:bg-opacity-90 from-teal-300 to-emerald-400">
              Todos os alunos
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center justify-center gap-2 flex-col drop-shadow-md w-56 h-20 rounded-md bg-gradient-to-b transition-transform transform hover:scale-105 hover:bg-opacity-90 from-teal-300 to-emerald-400">
              Todos Eventos
            </div>
          </Link>
        </div>
      </div>
      <div className="flex mt-10 gap-10 ">
        {/* Últimos Estudantes */}
        <div className="w-[30rem]">
          <h1 className="text-lg font-semibold italic pl-3 ">
            Últimos Estudantes Cadastrados
          </h1>
          <table className="table">
            <thead className="text-black">
              <tr>
                <th>Aluno</th>
                <th>Série</th>
                <th>Modalidade</th>
                <th>Turno</th>
              </tr>
            </thead>
            <tbody className="">
              {lastStudents.map((item) => (
                <tr key={item.id} className="">
                  <th>{item.nome}</th>
                  <th>{item.ano_serie}</th>
                  <th>{item.modalidade}</th>
                  <th>{item.turno}</th>
                  <Link to={`/aluno/${item.id}`} className="item-btn">
                    Página do Aluno
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* eventos */}
        <div>
          <h1>Próximos Eventos</h1>
          <ul>
            <li>evento 1</li>
            <li>evento 2</li>
            <li>evento 3</li>
          </ul>
        </div>
      </div>
      {/* data */}
      <div className="text-center font-semibold text-[20px] text-[#bcbcbe] bg-[#15445f]">
        {myDate}
      </div>
    </div>
  );
};

export default HomePage;
