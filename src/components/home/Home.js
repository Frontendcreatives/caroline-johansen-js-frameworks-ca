import React from "react";
import Heading from "../layout/Heading";
import GameList from "../game/GameList";

 function Home() {
	return (
		<>
			<Heading content="RAWG VIDEO GAMES" />
			<GameList />
		</>
	);
}

export default Home;