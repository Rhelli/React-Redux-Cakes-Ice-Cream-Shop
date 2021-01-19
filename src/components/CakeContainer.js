import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream, replenishIceCream, replenishCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <div>
        <h2>Number Of Cakes: {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Sell Cake</button>
        <button onClick={props.replenishCake}>Replenish Cake Stock</button>
      </div>
      <div>
        <h2>Number Of Ice-Creams: {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Sell Ice-Cream</button>
        <button onClick={props.replenishIceCream}>Replenish Ice Cream Stock</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
    replenishCake: () => dispatch(replenishCake()),
    replenishIceCream: () => dispatch(replenishIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
