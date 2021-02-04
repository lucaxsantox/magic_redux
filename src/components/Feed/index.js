import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import { bindActionCreators } from "redux";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
// nossas actions
import * as CarrinhoAction from "../../store/actions/actions";

const Feed = ({ cartas, adicionarCarrinho }) => {
  return (
    <div className="cartas"> 
      
      <Jumbotron fluid>
  <Container>
    <h1 className="font-effect-fire">Descubra quais as três cartas mais caras de magic do mundo.</h1>
    {cartas.map((item) => (
 
  
  
 <Button onClick={() => adicionarCarrinho(item)} className="col btn btn-dark-moon btn-rounded" style={{ width: '10rem', margin: '15px' }}>Carta (?)</Button>


))}
    
  </Container>
</Jumbotron>





</div>
      
  );
};

const mapStateToProps = (state) => ({
  cartas: state.cartas.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
