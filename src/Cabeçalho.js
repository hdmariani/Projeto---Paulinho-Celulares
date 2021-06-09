import React from "react";

export default (props) => {
  // const data = getDate(props.data) + / + getMonth(props.data) + / + getFullYear(props.data);
  const data = props.data;
  const nomecompra = props.nome;
  const idcompra = Math.floor(Math.random() * 1000);
  const valorcompra = parseFloat(props.valorcompra);
  const valorfrete = parseFloat(props.valorfrete);
  const valorcambio = parseFloat(props.valorcambio);
  const valorimposto = parseFloat(props.valorimposto);
  const valorcomprareal = parseFloat(valorcambio * valorcompra);
  const conversao =
    (valorcomprareal + valorfrete + valorimposto) / valorcomprareal;

  return (
    <table className="cabeçalho" style={{ border: "1px solid" }}>
      <tbody>
        <tr>
          <th>
            {" "}
            Data da Compra: <span>{data}</span>
          </th>
          <th>
            {" "}
            Nome da Compra: <span>{nomecompra}</span>
          </th>
          <th>
            {" "}
            #Compra: <span>{idcompra}</span>
          </th>
        </tr>

        <tr>
          <td>Valor da Compra: {"U$ " + valorcompra.toFixed(2)}</td>
          <td>Valor do Imposto: {"R$ " + valorimposto.toFixed(2)}</td>
          <td> Valor do Frete: {"R$ " + valorfrete.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Valor do Câmbio: {valorcambio.toFixed(2)}</td>
          <td> Fator de Conversão: {conversao.toFixed(2)}</td>
          <td> </td>
        </tr>
      </tbody>
    </table>
  );
};
