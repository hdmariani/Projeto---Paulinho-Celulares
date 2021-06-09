import React from "react";

export default (props) => {
  return (
   <div className="conteiner-tabela"> 
    <table style={{ border: "1px solid" }}>
      <tbody>
        <tr>
          <th>Produto</th>
          <th> Valor Base</th>
          <th> L(40%)</th>
          <th> L(50%)</th>
          <th>L(60%)</th>
        </tr>
        {props.lista.map((item, i) => (
          <tr key={i}>
            <td>{item.nome_produto}</td>
            <td>
              {" "}
              R$ {props.conversao(parseFloat(item.valor_produto)).toFixed(2)}
            </td>
            <td>
              {" "}
              R$ {props.lucro(parseFloat(item.valor_produto), 40).toFixed(2)}
            </td>
            <td>
              {" "}
              R$ {props.lucro(parseFloat(item.valor_produto), 50).toFixed(2)}
            </td>
            <td>
              {" "}
              R$ {props.lucro(parseFloat(item.valor_produto), 60).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>   
  );
};
