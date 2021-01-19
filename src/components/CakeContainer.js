import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <div>
        <h2>Number Of Cakes: {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Sell Cake</button>
        <button>Replenish Stock</button>
      </div>
      <div>
        <h2>Number Of Ice-Creams:</h2>
        <button>Sell Ice-Cream</button>
        <button>Replenish Stock</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
