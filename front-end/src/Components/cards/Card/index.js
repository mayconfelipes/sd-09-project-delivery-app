import React from 'react';

class Card extends React.Component {
  render() {
    // const { price, name, thumbnail, description } = this.props.cardList;
    return (
      <section>
        <h2>3,00 </h2>
        <img className="card-image" alt="" src="https://www.foodservicenews.com.br/wp-content/uploads/2019/08/shutterstock_104704718.jpg" />
        <div className="info">
          <h6 className="name">Nome da bebida</h6>
          <p className="subtitle">aqueles botoszinhos</p>
        </div>
      </section>
    );
  }
}

export default Card;
