import React, { useState } from "react";
import "./styles.css";

const comprainicial = {
  data: null,
  id_compra: "",
  valor_compra: 0,
  imposto: 0,
  frete: 0,
  cambio: 0
};

export default (props) => {

console.log("Render-Form-Compras")

  const [compra, setCompra] = useState(comprainicial);

  const onSubmit = (ev) => {
    ev.preventDefault();
    props.setIdCompra(compra)
    alert("Compra Salva");

  };

  function onChange(ev) {
    const { name, value } = ev.target;
    setCompra({ ...compra, [name]: value });
  }

  return (
    <div className="conteiner">
      <div className="borda">
        {" "}
        <span className="titulo"> Cadastro de Compra </span>
        <form className="form-compras" onSubmit={onSubmit}>
          <div className="linhas">
            <label htmlFor="data">Data:</label>
            <input type="date" id="data" name="data" onChange={onChange} />
          </div>

          <div className="linhas">
            <label htmlFor="id_compra">Nome da compra:</label>
            <input
              type="text"
              id="id_compra"
              name="id_compra"
              onChange={onChange}
            />
          </div>

          <div className="linhas">
            <label htmlFor="valor_compra">Valor da compra (US $):</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="valor_compra"
              name="valor_compra"
              onChange={onChange}
            />
          </div>

          <div className="linhas">
            <label htmlFor="imposto">Valor de Imposto (R$):</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="imposto"
              name="imposto"
              onChange={onChange}
            />
          </div>

          <div className="linhas">
            <label htmlFor="frete">Valor de Frete (R$):</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="frete"
              name="frete"
              onChange={onChange}
            />
          </div>

          <div className="linhas">
            <label htmlFor="cambio">Valor do Câmbio:</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="cambio"
              name="cambio"
              onChange={onChange}
            />
          </div>

          <div className="compras-botoes">
            <button className="botoes" type="submit">
              Salvar
            </button>
            <button className="botoes" onClick={() => props.setBoleano(true)}>            
              Prosseguir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
