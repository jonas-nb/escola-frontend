import CadastroForm from "../FormAlunos/CadastroForm";

const CadastroAluno = () => {
  return (
    <div className="h-screen overflow-auto text-black">
      <h1 className="text-[1.5rem] flex items-center">
        Formulário de Cadastro de Alunos
      </h1>
      <CadastroForm />
    </div>
  );
};

export default CadastroAluno;
