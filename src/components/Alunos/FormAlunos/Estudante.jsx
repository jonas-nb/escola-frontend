import {
  TextField,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  cpfMask,
  rgMask,
  cepMask,
  phoneMask,
  cartaoSUSMask,
  nisEstudanteMask,
} from "./Utils/valuesMasks";
import "./cadastro-style.css";

const Estudante = ({ formData, handleChange, handleDeficienciaChange }) => {
  //Array para o campo uf
  const opcoesUfNaturalidade = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  //Array para o campo etnia
  const opcoesEtnia = [
    "Branca",
    "Negra",
    "Amarela",
    "Parda",
    "Indígena",
    "Não declarada",
  ];

  //turnos
  const opcoesTurno = ["Manhã", "Tarde", "Noite"];

  //array campos ano letivo
  const opcoesModalidade = [
    "Educação Infantil",
    "Ciclo de alfabetização",
    "Fundamental I",
    "Fundamental II",
    "EDUCAÇÃO DE JOVENS E ADULTOS - EJA",
  ];

  const opcoesAnoLetivo = {
    "Educação Infantil": ["Berçário", "Maternal", "Pré I", "Pré II"],
    "Ciclo de alfabetização": ["1º", "2º", "3º"],
    "Fundamental I": ["4º", "5º"],
    "Fundamental II": ["6º", "7º", "8º", "9º"],
    "EDUCAÇÃO DE JOVENS E ADULTOS - EJA": [
      "Ciclo de Alfabetização",
      "Ciclo I",
      "Ciclo II",
      "Ciclo III",
      "Ciclo IV",
    ],
  };

  const opcoesDeficiencias = [
    "Cegueira",
    "Baixa Visão",
    "Altas Habilidades-Superdotação",
    "Surdo Cegueira",
    "Deficiência Auditiva",
    "Autismo",
    "Síndrome de Down",
    "Def. Física",
    "Def. Intelectual",
    "T.G.D.-Transtorno Global de Desenvolvimento",
  ];

  return (
    <div>
      {/* iformações de matricula */}
      <h1 className="title">Informação Escolares</h1>
      <div className="my-grid grid-cols-3">
        <TextField
          name="turno"
          label="Turno"
          variant="filled"
          color="success"
          required
          select
          value={formData.turno}
          onChange={handleChange}
        >
          {opcoesTurno.map((turno) => (
            <MenuItem key={turno} value={turno}>
              {turno}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          name="modalidade"
          label="Modalidade"
          variant="filled"
          color="success"
          required
          select
          value={formData.modalidade}
          onChange={handleChange}
        >
          {opcoesModalidade.map((modalidade) => (
            <MenuItem key={modalidade} value={modalidade}>
              {modalidade}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          name="ano_letivo"
          label="Ano Letivo"
          variant="filled"
          color="success"
          required
          select
          value={formData.ano_letivo}
          onChange={handleChange}
          disabled={!formData.modalidade}
        >
          {opcoesAnoLetivo[formData.modalidade] &&
            opcoesAnoLetivo[formData.modalidade].map((ano) => (
              <MenuItem key={ano} value={ano}>
                {ano}
              </MenuItem>
            ))}
        </TextField>
      </div>
      {/* informações Alunos */}
      <h1 className="title">Informações do Aluno</h1>
      <div className="my-grid grid-cols-3">
        <TextField
          name="nome"
          label="Nome"
          variant="filled"
          color="success"
          required
          value={formData.nome}
          onChange={handleChange}
        />
        <TextField
          name="data_nascimento"
          label="Data de Nascimento"
          variant="filled"
          color="success"
          required
          type="date"
          value={formData.data_nascimento}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="certidao_tipo"
          label="Tipo de Certidão"
          variant="filled"
          color="success"
          required
          select
          value={formData.certidao_tipo}
          onChange={handleChange}
        >
          <MenuItem value="nascimento">Nascimento</MenuItem>
          <MenuItem value="casamento">Casamento</MenuItem>
        </TextField>
        <TextField
          name="certidao_numero"
          label="Número da Certidão"
          variant="filled"
          color="success"
          required
          value={formData.certidao_numero}
          onChange={handleChange}
        />
        <TextField
          name="cpf"
          label="CPF"
          variant="filled"
          inputProps={{ minLength: 14, maxLength: 14 }}
          color="success"
          required
          value={formData.cpf}
          onChange={(e) =>
            handleChange({
              target: { name: "cpf", value: cpfMask(e.target.value) },
            })
          }
        />
        <TextField
          name="rg"
          label="RG"
          variant="filled"
          inputProps={{ minLength: 12, maxLength: 12 }}
          color="success"
          required
          value={formData.rg}
          onChange={(e) =>
            handleChange({
              target: { name: "rg", value: rgMask(e.target.value) },
            })
          }
        />
        <TextField
          name="orgao_emissor"
          label="Órgão Emissor"
          variant="filled"
          color="success"
          required
          value={formData.orgao_emissor}
          onChange={handleChange}
        />
        <TextField
          name="naturalidade"
          label="Naturalidade"
          variant="filled"
          color="success"
          required
          value={formData.naturalidade}
          onChange={handleChange}
        />
        <TextField
          name="uf_naturalidade"
          label="UF Naturalidade"
          variant="filled"
          color="success"
          required
          select
          value={formData.uf_naturalidade}
          onChange={handleChange}
        >
          {opcoesUfNaturalidade.map((uf) => (
            <MenuItem key={uf} value={uf}>
              {uf}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="etnia"
          label="Etnia"
          variant="filled"
          color="success"
          required
          select
          value={formData.etnia}
          onChange={handleChange}
        >
          {opcoesEtnia.map((etnia) => (
            <MenuItem key={etnia} value={etnia}>
              {etnia}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="endereco"
          label="Endereço"
          variant="filled"
          color="success"
          required
          value={formData.endereco}
          onChange={handleChange}
        />

        <TextField
          name="numero_endereco"
          label="Número do Endereço"
          variant="filled"
          color="success"
          required
          value={formData.numero_endereco}
          onChange={handleChange}
        />

        <TextField
          name="bairro"
          label="Bairro"
          variant="filled"
          color="success"
          required
          value={formData.bairro}
          onChange={handleChange}
        />
        <TextField
          name="cep"
          label="CEP"
          variant="filled"
          color="success"
          inputProps={{ minLength: 9, maxLength: 9 }}
          required
          value={formData.cep}
          onChange={(e) =>
            handleChange({
              target: { name: "cep", value: cepMask(e.target.value) },
            })
          }
        />
        <TextField
          name="ponto_referencia"
          label="Ponto de Referência"
          variant="filled"
          color="success"
          value={formData.ponto_referencia}
          onChange={(e) =>
            handleChange({
              target: { name: "ponto_referencia", value: e.target.value },
            })
          }
        />

        <TextField
          name="cidade"
          label="Cidade"
          variant="filled"
          color="success"
          value={formData.cidade}
          onChange={(e) =>
            handleChange({
              target: { name: "cidade", value: e.target.value },
            })
          }
        />
        <TextField
          name="uf_naturalidade"
          label="UF do Endereço"
          variant="filled"
          color="success"
          select
          value={formData.uf_endereco}
          onChange={(e) =>
            handleChange({
              target: { name: "uf_endereco", value: e.target.value },
            })
          }
        >
          {opcoesUfNaturalidade.map((uf) => (
            <MenuItem key={uf} value={uf}>
              {uf}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="pais"
          value={formData.pais}
          label="País de Nascimento"
          variant="filled"
          color="success"
          onChange={(e) =>
            handleChange({
              target: { name: "pais", value: e.target.value },
            })
          }
          required
        />
        <TextField
          name="telefone"
          label="Telefone"
          variant="filled"
          color="success"
          required
          value={formData.telefone}
          onChange={(e) =>
            handleChange({
              target: { name: "telefone", value: phoneMask(e.target.value) },
            })
          }
        />
        <TextField
          name="cartao_sus"
          label="Cartão SUS"
          variant="filled"
          color="success"
          required
          value={formData.cartao_sus}
          onChange={(e) =>
            handleChange({
              target: {
                name: "cartao_sus",
                value: cartaoSUSMask(e.target.value),
              },
            })
          }
        />

        <TextField
          name="nis_estudante"
          label="NIS do Estudante"
          variant="filled"
          color="success"
          required
          value={formData.nis_estudante}
          onChange={(e) =>
            handleChange({
              target: {
                name: "nis_estudante",
                value: nisEstudanteMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="bolsa_familia"
          label="Bolsa Família"
          variant="filled"
          color="success"
          required
          select
          value={formData.bolsa_familia}
          onChange={handleChange}
        >
          <MenuItem value="Sim">Sim</MenuItem>
          <MenuItem value="Não">Não</MenuItem>
        </TextField>
      </div>
      {/* Filiação */}
      <h1 className="title">Filiação</h1>
      <div className="my-grid grid-cols-3">
        <TextField
          name="mae_nome"
          label="Nome da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_nome}
          onChange={handleChange}
        />
        <TextField
          name="mae_telefone"
          label="Telefone da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_telefone}
          onChange={(e) =>
            handleChange({
              target: {
                name: "mae_telefone",
                value: phoneMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="mae_grau_instrucao"
          label="Grau de Instrução da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_grau_instrucao}
          onChange={handleChange}
        />
        <TextField
          name="mae_profissao"
          label="Profissão da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_profissao}
          onChange={handleChange}
        />
        <TextField
          name="mae_nis"
          label="NIS da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_nis}
          onChange={(e) =>
            handleChange({
              target: {
                name: "mae_nis",
                value: nisEstudanteMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="mae_cpf"
          label="CPF da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_cpf}
          onChange={(e) =>
            handleChange({
              target: { name: "mae_cpf", value: cpfMask(e.target.value) },
            })
          }
        />
        <TextField
          name="mae_rg"
          label="RG da Mãe"
          variant="filled"
          color="success"
          required
          value={formData.mae_rg}
          onChange={(e) =>
            handleChange({
              target: { name: "mae_rg", value: rgMask(e.target.value) },
            })
          }
        />
        <TextField
          name="pai_nome"
          label="Nome do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_nome}
          onChange={handleChange}
        />
        <TextField
          name="pai_telefone"
          label="Telefone do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_telefone}
          onChange={(e) =>
            handleChange({
              target: {
                name: "pai_telefone",
                value: phoneMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="pai_grau_instrucao"
          label="Grau de Instrução do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_grau_instrucao}
          onChange={handleChange}
        />
        <TextField
          name="pai_profissao"
          label="Profissão do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_profissao}
          onChange={handleChange}
        />
        <TextField
          name="pai_nis"
          label="NIS do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_nis}
          onChange={(e) =>
            handleChange({
              target: {
                name: "pai_nis",
                value: nisEstudanteMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="pai_cpf"
          label="CPF do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_cpf}
          onChange={(e) =>
            handleChange({
              target: { name: "pai_cpf", value: cpfMask(e.target.value) },
            })
          }
        />
        <TextField
          name="pai_rg"
          label="RG do Pai"
          variant="filled"
          color="success"
          required
          value={formData.pai_rg}
          onChange={(e) =>
            handleChange({
              target: { name: "pai_rg", value: rgMask(e.target.value) },
            })
          }
        />
        <TextField
          name="responsavel_nome"
          label="Nome do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_nome}
          onChange={handleChange}
        />
        <TextField
          name="responsavel_telefone"
          label="Telefone do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_telefone}
          onChange={(e) =>
            handleChange({
              target: {
                name: "responsavel_telefone",
                value: phoneMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="responsavel_grau_instrucao"
          label="Grau de Instrução do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_grau_instrucao}
          onChange={handleChange}
        />
        <TextField
          name="responsavel_profissao"
          label="Profissão do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_profissao}
          onChange={handleChange}
        />
        <TextField
          name="responsavel_cpf"
          label="CPF do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_cpf}
          onChange={(e) =>
            handleChange({
              target: {
                name: "responsavel_cpf",
                value: cpfMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="responsavel_rg"
          label="RG do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_rg}
          onChange={(e) =>
            handleChange({
              target: { name: "responsavel_rg", value: rgMask(e.target.value) },
            })
          }
        />
        <TextField
          name="responsavel_grau_parentesco"
          label="Grau de Parentesco do Responsável"
          variant="filled"
          color="success"
          required
          value={formData.responsavel_grau_parentesco}
          onChange={handleChange}
        />
      </div>
      {/* Dados Escolares Anteriores */}
      <h1 className="title">Dados Escolares Anteriores</h1>
      <div className="my-grid grid-cols-3">
        <TextField
          name="nome_escola_anterior"
          label="Nome da Escola Anterior"
          variant="filled"
          color="success"
          required
          value={formData.nome_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="endereco_escola_anterior"
          label="Endereço da Escola Anterior"
          variant="filled"
          color="success"
          required
          value={formData.endereco_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="numero_escola_anterior"
          label="Número da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.numero_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="bairro_escola_anterior"
          label="Bairro da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.bairro_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="cep_escola_anterior"
          label="CEP da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.cep_escola_anterior}
          onChange={(e) =>
            handleChange({
              target: {
                name: "cep_escola_anterior",
                value: cepMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="cidade_escola_anterior"
          label="Cidade da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.cidade_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="uf_escola_anterior"
          label="UF da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.uf_escola_anterior}
          onChange={handleChange}
        />
        <TextField
          name="telefone_escola_anterior"
          label="Telefone da Escola Anterior"
          variant="filled"
          color="success"
          value={formData.telefone_escola_anterior}
          onChange={(e) =>
            handleChange({
              target: {
                name: "telefone_escola_anterior",
                value: phoneMask(e.target.value),
              },
            })
          }
        />
        <TextField
          name="ultimo_ano_letivo"
          label="Último Ano Letivo Cursado"
          variant="filled"
          color="success"
          value={formData.ultimo_ano_letivo}
          onChange={handleChange}
        />
        <TextField
          name="ano_serie"
          label="Ano/Série"
          variant="filled"
          color="success"
          value={formData.ano_serie}
          onChange={handleChange}
        />
        <TextField
          name="egresso_brasil_alfabetizado"
          label="Egresso do Brasil Alfabetizado?"
          variant="filled"
          color="success"
          select
          value={formData.egresso_brasil_alfabetizado}
          onChange={handleChange}
        >
          <MenuItem value="Sim">Sim</MenuItem>
          <MenuItem value="Não">Não</MenuItem>
        </TextField>
        <TextField
          name="outro_programa"
          label="Outro Programa"
          variant="filled"
          color="success"
          value={formData.outro_programa}
          onChange={handleChange}
        />
      </div>
      {/* DEFICIÊNCIAS/TRANSTORNOS GLOBAIS DE DESENVOVIMENTO/ALTAS HABILIDADES-SUPERDOTAÇÃO */}
      <h1 className="title">
        Deficiências / Transtornos Globais de Desenvolvimento / Altas
        Habilidades-Superdotação
      </h1>
      <div className="my-grid grid-cols-3 ml-5">
        <FormControl component="fieldset">
          <legend>Deficiências</legend>
          <FormGroup className="">
            {opcoesDeficiencias.map((deficiencia) => (
              <FormControlLabel
                key={deficiencia}
                control={
                  <Checkbox
                    className="flex"
                    checked={formData.deficiencias.includes(deficiencia)}
                    onChange={() => handleDeficienciaChange(deficiencia)}
                    name={deficiencia}
                  />
                }
                label={deficiencia}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      {/* Rendas e Benefícios  */}
      <h1 className="title">Rendas e Benefícios</h1>
      <div className="w-full my-grid grid-cols-2 justify-items-center">
        <TextField
          name="renda_familiar"
          label="Renda Familiar - Salário"
          variant="filled"
          color="success"
          required
          select
          value={formData.renda_familiar}
          onChange={handleChange}
        >
          <MenuItem value="Até 1 salário mínimo">Até 1 salário mínimo</MenuItem>
          <MenuItem value="1 a 3 salários mínimos">
            1 a 3 salários mínimos
          </MenuItem>
          <MenuItem value="3 a 5 salários mínimos">
            3 a 5 salários mínimos
          </MenuItem>
          <MenuItem value="Mais de 5 salários mínimos">
            Mais de 5 salários mínimos
          </MenuItem>
          <MenuItem value="Sem renda fixa">Sem renda fixa</MenuItem>
        </TextField>

        <TextField
          name="transporte_rural"
          label="Utiliza transporte da Zona Rural para a Escola?"
          variant="filled"
          color="success"
          required
          select
          value={formData.transporte_rural}
          onChange={handleChange}
        >
          <MenuItem value="Sim">Sim</MenuItem>
          <MenuItem value="Não">Não</MenuItem>
        </TextField>
      </div>
    </div>
  );
};

export default Estudante;
