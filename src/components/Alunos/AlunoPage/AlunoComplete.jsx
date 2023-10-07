import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import axios from "axios";

const AlunoComplete = () => {
  const params = useParams();
  const [data, setData] = useState({});

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

  const DataArray = Object.entries(data);
  const DataArrayTeste = DataArray.map((item) => {
    return item;
  });

  console.log(DataArrayTeste);

  return (
    <div className="overflow-auto h-screen p-1 ">
      <div className="flex border">
        <div className="back-btn w-10">
          <Link to={-1}>{<BsFillArrowLeftCircleFill />}</Link>
        </div>
        <h1 className="text-3xl m-auto">Informações Completas</h1>
      </div>

      <p className="text-center italic text-[#000000b4] pl-10">
        Para pesquisar um dado específico precione ctrl + F
      </p>
      <div className="grid grid-cols-2 mt-5 p-1 pl-52">
        {DataArray.map((item, i) => (
          <div key={i} className="capitalize p-1 ">
            <span className="font-bold">{item[0].replace(/_/g, " ")}</span>:
            <span> {item[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlunoComplete;
