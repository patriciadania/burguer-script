import './Cardapio.css'
import ItensCardapio from './ItensCardapio';

// const Cardapio = () => {
//   const [produtosSelecionados, setProdutosSelecionados] = useState([]);

//   const handleProdutoSelecionado = (produto) => {
//     const produtoExistente = produtosSelecionados.find((p) => p.id === produto.id);

//     if (produtoExistente) {
//       const produtosAtualizados = produtosSelecionados.map((p) =>
//         p.id === produto.id ? { ...p, quantity: p.quantity + 1 } : p
//       );
//       setProdutosSelecionados(produtosAtualizados);
//     } else {
//       setProdutosSelecionados([...produtosSelecionados, { ...produto, quantity: 1 }]);
//     }
//   };

//   return (
//     <div className='cardapio-resumo'>
//       <h2>Café da Manhã</h2>
//       <ItensCardapio
//         tipoProduto='café da manhã'
//         handleProdutoSelecionado={handleProdutoSelecionado}
//       />
//       <h2>Menu Principal</h2>
//       <ItensCardapio
//         tipoProduto='menu principal'
//         handleProdutoSelecionado={handleProdutoSelecionado}
//       />
//       <ResumoPedido produtosSelecionados={produtosSelecionados} />
//     </div>
//   );
// };

// export default Cardapio;


const Cardapio = ({ handleProdutoSelecionado }) => {
  return (
    <section className='cardapio-resumo'>
      <div className='card-itens-cardapio'>
     <h2 className='titulo-tipo-refeicao'> 
     <span className="colchetes">{"["}</span> 
     Café da Manhã 
     <span className="colchetes">{"]"}</span>
     </h2>
      <ItensCardapio
        tipoProduto='café da manhã'
        handleProdutoSelecionado={handleProdutoSelecionado}
      />
      </div>
      <div className='card-itens-cardapio'>
      <h2 className='titulo-tipo-refeicao'>
      <span className="colchetes">{"["}</span>
        Menu Principal
        <span className="colchetes">{"]"}</span>
        </h2>
      <ItensCardapio
        tipoProduto='menu principal'
        handleProdutoSelecionado={handleProdutoSelecionado}
      />
      </div>
    </section>
  );
};

export default Cardapio;