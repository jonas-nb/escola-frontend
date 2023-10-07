import { useState } from "react";
import Estudante from "./Estudante";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    //matricula
    turno: "",
    modalidade: "",
    ano_letivo: "",

    //dados alunos
    nome: "",
    data_nascimento: "",
    certidao_tipo: "",
    certidao_numero: "",
    cpf: "",
    rg: "",
    orgao_emissor: "",
    naturalidade: "",
    uf_naturalidade: "",
    etnia: "",
    endereco: "",
    numero_endereco: "",
    bairro: "",
    cep: "",
    ponto_referencia: "",
    cidade: "",
    uf_endereco: "",
    pais: "",
    telefone: "",
    cartao_sus: "",
    nis_estudante: "",
    bolsa_familia: "",
    //filiação
    mae_nome: "",
    mae_telefone: "",
    mae_grau_instrucao: "",
    mae_profissao: "",
    mae_nis: "",
    mae_cpf: "",
    mae_rg: "",
    pai_nome: "",
    pai_telefone: "",
    pai_grau_instrucao: "",
    pai_profissao: "",
    pai_nis: "",
    pai_cpf: "",
    pai_rg: "",
    responsavel_nome: "",
    responsavel_telefone: "",
    responsavel_grau_instrucao: "",
    responsavel_profissao: "",
    responsavel_cpf: "",
    responsavel_rg: "",
    responsavel_grau_parentesco: "",
    //Dados Escolares Anteriores
    nome_escola_anterior: "",
    endereco_escola_anterior: "",
    numero_escola_anterior: "",
    bairro_escola_anterior: "",
    cep_escola_anterior: "",
    cidade_escola_anterior: "",
    uf_escola_anterior: "",
    telefone_escola_anterior: "",
    ultimo_ano_letivo: "",
    ano_serie: "",
    egresso_brasil_alfabetizado: "",
    outro_programa: "",
    //deficiência
    deficiencias: [],
    //renda
    renda_familiar: "",
    transporte_rural: "",
  });

  const [open, setOpen] = useState(false);
  console.log(formData);
  const navigate = useNavigate();

  const handleDeficienciaChange = (deficiencia) => {
    setFormData((prevData) => {
      if (prevData.deficiencias.includes(deficiencia)) {
        // Remover deficiência do array
        return {
          ...prevData,
          deficiencias: prevData.deficiencias.filter(
            (item) => item !== deficiencia
          ),
        };
      } else {
        // Adicionar deficiência ao array
        return {
          ...prevData,
          deficiencias: [...prevData.deficiencias, deficiencia],
        };
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/aluno");
    }, 100);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:3000/aluno/cadastro",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      //ativa janela do popup apenas para mostra ao usuário o aviso de dados cadastrado
      setOpen(true);
    } catch (error) {
      //mostra o erro para o user
      toast.error("Erro ao cadastrar aluno", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000, // Fechar automaticamente após 5 segundos
        hideProgressBar: false, // Mostrar barra de progresso
        closeOnClick: true, // Fechar ao clicar
        pauseOnHover: true, // Pausar ao passar o mouse
        draggable: true, // Permitir arrastar
        theme: "colored", // Tema
      });
      console.log(`${error}: Erro ao cadastrar aluno`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Estudante
        formData={formData}
        handleChange={handleChange}
        handleDeficienciaChange={handleDeficienciaChange}
      />

      <ToastContainer />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dados cadastrados com sucesso!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <button
        type="submit"
        className="m-auto mt-10 mb-10 w-36 h-12 rounded-sm  bg-[#9DBEBB] hover:bg-[#468189] duration-300 text-[#031926] hover:text-[#ffffff]"
      >
        Finalizar Cadastro
      </button>
    </form>
  );
};

export default CadastroForm;
