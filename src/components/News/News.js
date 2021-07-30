import React from "react";

import { Accordion, Button, Card } from "react-bootstrap";

const News = (props) => {
  const { title,description,url,urlToImage,name } = props.article;
  return (
    <div style={{textAlign: 'center'}}>
      
      <Card  style={{textAlign: 'center'}} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h2>{title}</h2>
          </Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Link href="#">{url}</Card.Link>
          <Card.Link href="#">{urlToImage}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
