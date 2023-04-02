import React from "react"
import Card from "react-bootstrap/Card"
import ConstantinCernean from './Consatntin_Cernean.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={ConstantinCernean} />
        <Card.Body>
            <Card.Title>Constantin Cernean</Card.Title>
            <Card.Text>
            I am trying to Learn React-Redux 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard;