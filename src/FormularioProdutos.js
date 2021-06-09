import React, { useState } from "react";

export default (props) => {
  let [produto, setProduto] = useState({});
  let [listaproduto, setListaProduto] = useState(new Array(0));

  const onChange = (ev) => {
    const { name, value } = ev.target;
    console.log(ev.target);
    setProduto({ ...produto, [name]: value });
  };

  const renovaListaOnClick = ()=> setListaProduto([...listaproduto, produto]);

  const onSubmit = (ev) => {
    ev.preventDefault();
    props.setLista(listaproduto)

    ev.target.querySelectorAll("input")[0].value = "";
    ev.target.querySelectorAll("input")[1].value = "";

  };

  return (
    <div className="dados-produto">
      <div className="borda"> <span className="titulo">Cadastrar Produtos</span>

      <form className="registra-produto" onSubmit={onSubmit}>
        <div className="input-produtos">
          <label htmlFor="nome_produto">Descrição do Produto:</label>
          <br/>
          <input
            type="text"
            id="nome_produto"
            name="nome_produto"
            onChange={onChange}
          />

          <label htmlFor="valor_produto">Preço do Produto (US $):</label>
          <br/>
          <input
            type="number"
            step="0.01"
            min="0"
            id="valor_produto"
            name="valor_produto"
            onChange={onChange}
          />
          </div>
        
          <div className="botoes">
          <button type="submit" onClick={renovaListaOnClick}>
            {" "}
            Adicionar Produto{" "}
          </button>
          <button onClick={() => props.setBoleano(false)}> Voltar </button>
          </div>
        </form>
        </div>
    </div>
  );
};
