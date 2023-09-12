import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhosData from '../data/aparelhos';

const VisualizarAparelho = () => {
  const { id } = useParams();
  const aparelho = aparelhosData.find(ap => ap.id === id);

  if (!aparelho) {
    return <h2>Aparelho não encontrado</h2>;
  }

  return (
    <div>
      <h2>{aparelho.nome}</h2>
      <img src={aparelho.imagem} alt={aparelho.nome} />
      <p>{aparelho.descricao}</p>
      <p>Preço: R$ {aparelho.preco}</p>
      {/* Outros detalhes do aparelho */}
    </div>
  );
};

export default VisualizarAparelho;
