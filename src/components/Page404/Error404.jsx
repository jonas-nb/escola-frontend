import React from "react";

const Error404 = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="text-5xl">Oops! Página não encontrada</h1>
      <p className="text-xl mt-3">
        A página que vocé está procurando não existe.
      </p>
      <p className="text-xl mt-5">
        Volte para
        <a href="/" className="font-bold underline text-[#308aff] pl-1 pr-1">
          página inicial
        </a>
        ou use a barra de navegação para encontrar o que você procura.
      </p>
    </div>
  );
};

export default Error404;
