import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { API } from "../../constants/API";


function GameDetail() {
    const [info, setInfo] = useState(null);
   

    let { id } = useParams();

    const gameurl = API + "/" + id;
    
    console.log(gameurl);

    useEffect(() => {
        fetch(gameurl)
            .then(response => response.json())
            .then(json => setInfo(json))
			.catch(error => console.log(error))
     
    }, [gameurl]);
     
 
    
  return (
  <Container>
		<Row>
			<Col>
				<Image src={info.background_image} fluid />
			</Col>
        </Row>
         <Row>
			<Col>
				<h1>{info.name}</h1>
				<h3>Description:</h3> 
                <p>{info.description}</p>
				<h3> Website: {info.website}</h3>
				
			</Col>
		  </Row>
    </Container>
	);
   
}
    


export default GameDetail;


