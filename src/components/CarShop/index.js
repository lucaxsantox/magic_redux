import React from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import './index.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CarShop = ({carta}) => {
  return (
      <div className="carta"> 
        <Card  >
        <Row className="row-12">
          <Col className="col-6"><Card.Img variant="top" src={carta.imagem} /></Col>
        <Col className="col-6"><Card.Body>
          <Card.Title>{carta.descricao}</Card.Title>
          <Card.Text className="font-effect-fire">
          {carta.preco}
          </Card.Text>
          
        </Card.Body></Col></Row>
      </Card>   
    
      </div>
  );
};

export default connect((state) => ({
    carta: state.cartas.carta
}))(CarShop);
