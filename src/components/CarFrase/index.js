import React from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'



const CarFrase = ({frase}) => {
  return (
    <div className="frase"> 
      <Card  >
       <Card.Body>
        <Card.Title>{frase.nome}</Card.Title>
         <Card.Text>
         {frase.descricao}
         </Card.Text>
         
       </Card.Body>
     </Card>   
  
     </div>
  );
};

export default connect((state) => ({
    frase: state.frases.frase
}))(CarFrase);
