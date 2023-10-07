import styled from "styled-components";
import AvatarMenuItem from "../Painel/AvatarMenuItem";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AlunoPainelContainer = styled.div``;

const PainelAluno = () => {
  return (
    <AlunoPainelContainer>
      <h1 className="text-center text-3xl font-bold mb-5 mt-5">Alunos</h1>
      <ul className="flex gap-5 place-content-center place-items-center  mb-5 mt-5  ">
        <li>
          <Link to="/aluno/cadastro">
            <AvatarMenuItem
              title="Cadastro Aluno"
              icon={<BsPersonFillAdd />}
              active={true}
              bg="from-teal-300 to-emerald-400"
            />
          </Link>
        </li>
        <li>
          <Link to="/aluno/lista">
            <AvatarMenuItem
              title="Lista de Alunos"
              icon={<IoPeopleSharp />}
              active={true}
              bg="from-teal-300 to-emerald-400"
            />
          </Link>
        </li>
      </ul>
    </AlunoPainelContainer>
  );
};

export default PainelAluno;
