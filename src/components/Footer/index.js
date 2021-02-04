import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
//  colocando nossas Actions dentro de um Objeto
import * as CourseActions from "../../store/actions/actions";

const FooterFrases = ({ frases, toggleFrase }) => {
  return (
    <div> 
      
      <Jumbotron fluid>
  <Container>
    <h1 className="font-effect-fire">Goblins? Encontre frases tão piradas quanto eles.</h1> 
    {frases.map((item) => (
 
    
    
 <Button onClick={() => toggleFrase(item)} className="col btn btn-dark-moon btn-rounded" style={{ width: '10rem', margin: '15px' }}>Goblins (?)</Button>


))}  
    </Container>
</Jumbotron>





</div>
  );
};

// funcao que retorna o nosso estado
const mapStateToProps = (state) => ({
  frases: state.frases.frases,
});

//  funcao que retorna um dispatch para disparar uma action
const mapDispatchToProps = (dispatch) =>
  // mapeando nosso Objeto em forma de propriedade
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FooterFrases);