import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Ofertas Especiais</h2>
      <div className="promo">
        <img src="./assets/iphone12pro.jpg" alt="Desconto de 20% em Smartphone XYZ" />
        <p>Desconto de 20% no Iphone 12 pro! Compre agora por apenas R$799,99.</p>
        <button>Comprar Agora</button>
      </div>
      <div className="promo">
        <img src="./assets/galaxytab.jpg" alt="Tablet Galaxy Tab com brinde exclusivo" />
        <p>Compre o Tablet Galaxy Tab e ganhe um brinde exclusivo! Apenas R$499,99.</p>
        <button>Comprar Agora</button>
      </div>
    </div>
  );
};

export default Home;
