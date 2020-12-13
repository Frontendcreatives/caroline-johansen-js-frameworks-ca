import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "../game/GameItem";
import { API } from "../../constants/API";
import SearchGame from "../search/SearchGame";




function GameList() {

const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);
    
    
   useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);      
            })
            .catch(error => console.log(error));
            
    }, []);
    
    const filterGame = function(e) {
        
    const searchInp = e.target.value.toLowerCase();
    const filterArr = games.filter(function(gam) { 
     
        const lowCaseTitle = gam.name.toLowerCase();
        
        if (lowCaseTitle.startsWith(searchInp)) {
    
        return true;
         
        }
        
        return false;
        
    });
    
    setFilteredGames(filterArr);
    }; 
        
        return (
    
        <div>
          <SearchGame handleSrc={filterGame} />
            <Row>
                {filteredGames.map(g => {
                    const { id, name, background_image, rating, released } = g;
    
        return (    
            
            <Col sm={8} md={4} key={id}>
                <GameItem id={id} name={name} background_image={background_image} rating={rating} released={released}/>
            </Col>
            
				);
    
        })}
            </Row>
        </div>
    );
}

export default GameList;