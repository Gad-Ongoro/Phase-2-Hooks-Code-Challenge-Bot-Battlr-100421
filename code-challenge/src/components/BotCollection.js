import React, {useEffect, useState} from "react";

function BotCollection() {
  	// Your code here
	const [botsList, setBotsList] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:8002/bots")
		  .then((res) => res.json())
		  .then((data) => {
				setBotsList(data);		
		  });
	}, []);

	let eachBot = botsList.map((bot) => {
		return (
			<li key={bot.id}>
				<img src={bot.avatar_url}></img>
				<p>{bot.name}</p>
			</li>
		)
	})

  	return (
    	<div className="ui four column grid">
      		<div className="row">
        		{/*...and here..*/}
        		<ul className="bots-container">
					{eachBot}
				</ul>
      		</div>
    	</div>
  	);
}

export default BotCollection;