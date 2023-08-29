import React from 'react';
import Card from 'react-bootstrap/Card';

const GitHubCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="public/photos/me.HEIC" alt="me" />
      <Card.Body>
        <Card.Title>ellafreudenberger</Card.Title>
        <Card.Text>
          A Software Engineer Student at NYU
        </Card.Text>
        <Card.Footer>Graduating December 2023</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
