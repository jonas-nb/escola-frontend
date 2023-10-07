// mask of cpf
export function cpfMask(value) {
  const cpf = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (cpf.length <= 11) {
    return cpf
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      .substr(0, 14);
  }
  return value;
}

//mascara de rg
export const rgMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,1})$/);

  if (match) {
    // Formata o valor do RG
    const formattedValue =
      match[1] + "." + match[2] + "." + match[3] + "-" + match[4];
    return formattedValue;
  }

  return value;
};

// Função de máscara para CEP
export const cepMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{0,5})(\d{0,3})$/);

  if (match) {
    // Formata o valor do CEP
    const formattedValue = match[1] + (match[2] ? "-" + match[2] : "");
    return formattedValue;
  }

  return value;
};

//função para telefone
export const phoneMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

  if (match) {
    let formattedValue = "";

    if (match[1]) {
      formattedValue += "(" + match[1];
      if (match[2]) {
        formattedValue += ") " + match[2];
        if (match[3]) {
          formattedValue += "-" + match[3];
        }
      }
    }

    return formattedValue;
  }

  return value;
};

// Utils/masks.js

export const cartaoSUSMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{0,3})(\d{0,4})(\d{0,4})(\d{0,4})$/);

  if (match) {
    let formattedValue = "";

    if (match[1]) {
      formattedValue += match[1];
      if (match[2]) {
        formattedValue += " " + match[2];
        if (match[3]) {
          formattedValue += " " + match[3];
          if (match[4]) {
            formattedValue += " " + match[4];
          }
        }
      }
    }

    return formattedValue;
  }

  return value;
};

export const nisEstudanteMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{0,3})(\d{0,6})(\d{0,1})$/);

  if (match) {
    let formattedValue = "";

    if (match[1]) {
      formattedValue += match[1];
      if (match[2]) {
        formattedValue += " " + match[2];
        if (match[3]) {
          formattedValue += " " + match[3];
        }
      }
    }

    return formattedValue;
  }

  return value;
};

export const bolsaFamiliaMask = (value) => {
  const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const match = cleanValue.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/);

  if (match) {
    let formattedValue = "";

    if (match[1]) {
      formattedValue += match[1];
      if (match[2]) {
        formattedValue += " " + match[2];
        if (match[3]) {
          formattedValue += " " + match[3];
          if (match[4]) {
            formattedValue += " " + match[4];
          }
        }
      }
    }

    return formattedValue;
  }

  return value;
};
