import "./styles.css";
import React, { useState } from "react";
import FormularioCompra from "./FormularioCompra";
import FormularioProdutos from "./FormularioProdutos";
import Cabeçalho from "./Cabeçalho";
import ListaProdutos from "./ListaProdutos";



export default function App() {

  let [idcompra, setIdCompra] = useState({});

  let [boleano, setBoleano] = useState(false);
console.log(idcompra, boleano);

  let [lista, setLista] = useState(new Array(0));

  const valorcompra = parseFloat(idcompra.valor_compra);
  const valorfrete = parseFloat(idcompra.frete);
  const valorcambio = parseFloat(idcompra.cambio);
  const valorimposto = parseFloat(idcompra.imposto);
  const valorcomprareal = parseFloat(valorcambio * valorcompra);
  const fatorconversao = parseFloat(
    (valorcomprareal + valorfrete + valorimposto) / valorcomprareal
  );
  const conversaoreal = (preco) => preco * fatorconversao * valorcambio;
  const lucro = (preco, lucro) =>
    conversaoreal(preco) * (1 + lucro / 100).toFixed(2); 


  const handleComponente = (bool) => {
    setBoleano(bool);
  };

  const handleCompra = (bool) => {
    setIdCompra(bool);
  };

  const handleLista = (bool) => {
    setLista(bool);
  };

  return (
    <div className="App">
      {boleano ? (
        <FormularioProdutos
          setBoleano={handleComponente}
          setLista={handleLista}
          lista={lista}
        />
      ) : (
        <FormularioCompra
          setIdCompra={handleCompra}
          setBoleano={handleComponente}
        />
      )}
      {boleano && (
        <>
          <Cabeçalho
            data={idcompra.data}
            nome={idcompra.id_compra}
            // idcompra={Math.floor(Math.random() * 1000)}
            valorcompra={idcompra.valor_compra}
            valorimposto={idcompra.imposto}
            valorfrete={idcompra.frete}
            valorcambio={idcompra.cambio}
          />
          <ListaProdutos
            lista={lista}
            lucro={lucro}
            conversao={conversaoreal}
          />
        </>
      )}
    </div>
  );
}
