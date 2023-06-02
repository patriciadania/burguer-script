import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../../API/Produtos';
import './Produto.css';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';




const ListaDeProdutos = (props) => {
  const { tipoProduto } = props;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const produtosData = await obterProdutos();
        setProdutos(produtosData);
      } catch (error) {
        console.error(error);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <div className='tabela-produtos'>
      <h1 className='titulo-tabela-produtos'>Lista de Produtos</h1>
      <dl className='tabela-produtos-admin'>
        <div className='tabela-produtos-cabecalho'>
          <dt className='tabela-produtos-id'>ID</dt>
          <dt className='tabela-produtos-esquerda'>Nome do Produto</dt>
          <dt className='tabela-produtos-direita'>Valor</dt>
          <dt className='tabela-produtos-direita'>Quantidade</dt>
          <dt>Ações</dt>
        </div>

        {produtos
          .filter((produto) => (!tipoProduto || produto.type === tipoProduto))
          .map((produto) => (
            <dd key={produto.id} className='tabela-produtos-itens'>
              <span className='tabela-produtos-id'>{produto.id}</span>
              <span className='tabela-produtos-esquerda'>{produto.name}</span>
              <span className='tabela-produtos-direita'>R$ {produto.price}</span>
              <span>{produto.qty}</span>
              <span className='icone-deletar'>
                <ModeEditTwoToneIcon />
               <DeleteIcon />

                </span>

            </dd>
          ))}

      </dl>
    </div>
  );
};

export default ListaDeProdutos;
