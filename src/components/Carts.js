import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({ celebrity }) {
  return (
    <Card style={{ width: '15rem', marginBottom: '3rem' }}>
      <Card.Img variant="top" src={celebrity.image} />
      <Card.Body>
        <Card.Title>{celebrity.name}</Card.Title>
        <Card.Text>
          {celebrity.description}
        </Card.Text>
        <Button variant="outline-success">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
