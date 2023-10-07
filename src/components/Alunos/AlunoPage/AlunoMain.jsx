import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perfil from "../../../../public/perfil.jpg";
import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const TituloInfo = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
`;

const AlunoMain = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  const postStudentId = async () => {
    try {
      const id = params.id;
      const response = await axios.get(`http://localhost:3000/aluno/${id}`);
      setData(response.data);
    } catch (error) {
      console.log("Erro: " + error);
    }
  };

  useEffect(() => {
    postStudentId();
  }, []);

  const transformDate = (myDate) => {
    const date = new Date();
    const year = date.getFullYear();
    if (!myDate) {
      return "Não informado";
    }
    const formattedDateArray = myDate.split("-");
    const formattedDate = `${formattedDateArray[2]}/${formattedDateArray[1]}/${
      formattedDateArray[0]
    } - ${year - formattedDateArray[0]} anos de idade`;

    return formattedDate;
  };

  return (
    <div>
      <div className="m-auto mt-10 w-[80%] flex items-center">
        <div className="back-btn w-10">
          <Link to={-1}>{<BsFillArrowLeftCircleFill />}</Link>
        </div>

        <h1 className="text-center text-3xl pl-44">
          Informações Principais do Aluno
        </h1>
      </div>

      <div className="w-[80%] m-auto mt-24">
        <img src={Perfil} alt="" className="w-44 float-right" />
        <ul>
          <li>
            <TituloInfo>Nome:</TituloInfo> {data.nome}
          </li>
          <li>
            <TituloInfo>Data de Nascimento:</TituloInfo>{" "}
            {transformDate(data.data_nascimento)}
          </li>
          <li>
            <TituloInfo>Ano Letivo:</TituloInfo> {data.ano_letivo}
          </li>
          <li>
            <TituloInfo>Série:</TituloInfo> {data.ano_serie}
          </li>
          <li>
            <TituloInfo>Modalidade:</TituloInfo> {data.modalidade}
          </li>
          <li>
            <TituloInfo>Turno:</TituloInfo> {data.turno}
          </li>
          <li>
            <TituloInfo>Endereço:</TituloInfo> {data.endereco},{" "}
            {data.numero_endereco}, {data.cidade} - {data.uf_endereco}
          </li>
          <li>
            <TituloInfo>Nome do Responsável:</TituloInfo>{" "}
            {data.responsavel_nome}
          </li>
          <li>
            <TituloInfo>Telefone do Responsável:</TituloInfo>{" "}
            {data.responsavel_telefone}
          </li>
          <li>
            <TituloInfo>Benefício Bolsa Família:</TituloInfo>{" "}
            {data.bolsa_familia}
          </li>
        </ul>
      </div>
      <div className="w-full mt-10 flex justify-center gap-5">
        <div className="btn bg-[#468189] hover:bg-[#7ed4d4] border-none text-black">
          <Link to={`/aluno/${data.id}/informacoes-completas`}>
            Informações completas
          </Link>
        </div>
        <div className="btn bg-[#468189] hover:bg-[#7ed4d4] border-none text-black">
          <Link>Editar Informações</Link>
        </div>
      </div>
    </div>
  );
};

export default AlunoMain;
