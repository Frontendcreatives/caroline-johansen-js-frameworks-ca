import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function GameItem({ id, name, background_image, rating, released }) {
	return (
		  <Card>
			<Card.Img variant="top" src={background_image} />
                <Card.Body>
				    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Title><h5>Rating:</h5>{rating}</Card.Title>
                    <Card.Title><h5>Released:</h5>{released}</Card.Title>
                    <Link to={"games/" + id}>
					   <Button variant="info" block> View More </Button>
				    </Link>
                </Card.Body>
            </Card>
	);
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	background_image: PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    released:PropTypes.string.isRequired
};

export default GameItem;


