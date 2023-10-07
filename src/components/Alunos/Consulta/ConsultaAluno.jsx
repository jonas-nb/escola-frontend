import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import TextField from "@mui/material/TextField";
import "./consulta-style.css";

const ConsultaAluno = () => {
  const [responseData, setResponseData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getAlunos();
  }, []);

  const getAlunos = async () => {
    const response = await axios.get("http://localhost:3000/aluno/lista");
    setResponseData(response.data);
  };

  const searchResult = responseData.filter((aluno) =>
    aluno.nome.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="h-screen border border-green-600 flex flex-col items-center gap-3">
      <h1 className="text-center text-4xl text-black">
        Lista de todos os alunos
      </h1>
      <label
        htmlFor="outlined-basic"
        className="text-black flex items-center gap-2"
      >
        Pesquisar Aluno <BsSearch />
      </label>
      <TextField
        id="outlined-basic"
        className="block m-auto w-[60vw]"
        type="text"
        placeholder="Digite o nome do aluno"
        autoComplete="off"
        variant="outlined"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div className="w-[70vw] p-1 overflow-auto">
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
            {(searchInput ? searchResult : responseData).map((item) => (
              <tr key={item.id} className="hover:bg-[#268a97] text-[#000]">
                <th>{item.nome}</th>
                <th>{item.ano_serie}</th>
                <th>{item.modalidade}</th>
                <th>{item.turno}</th>
                <Link className="item-btn" to={`/aluno/${item.id}`}>
                  Página do Aluno
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
        {searchInput && searchResult.length === 0 && (
          <p className="text-red-500 text-lg">Nenhum aluno encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ConsultaAluno;
