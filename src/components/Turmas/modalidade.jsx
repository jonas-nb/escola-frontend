import React from "react";
import axios from "axios";

const modalidade = () => {
  const [responseData, setResponseData] = React.useState([]);

  const getAlunos = async () => {
    const response = await axios.get("http://localhost:3000/alunos");
    console.log(response.data);
  };

  return <div>modalidade</div>;
};

export default modalidade;
