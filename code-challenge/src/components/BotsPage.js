import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Switch, Route, Routes } from "react-router-dom";

function BotsPage() {
  //start here with your code for step one
  const [botsList, setBotsList] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:8002/bots")
		  	.then((res) => res.json())
		  	.then((data) => {
				setBotsList(data);		
		  	});
	}, []);

	// handle Bot Click

  	return (
    	<div class="bots-page">
			<YourBotArmy botsList={botsList}/>
      		<BotCollection botsList={botsList}/>
    	</div>
	)
}

export default BotsPage;
