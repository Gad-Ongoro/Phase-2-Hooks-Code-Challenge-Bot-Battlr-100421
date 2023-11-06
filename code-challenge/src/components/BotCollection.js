import React, {useState} from "react";
import { NavLink, Routes, Route } from "react-router-dom";

function BotCollection({botsList}) {
  	// Your code here
	const [id, setID] = useState(101);

	let botCSS = {
		width: "20%",
		overflow: "hidden",
		border: "1px solid rgba(0, 0, 0, 0.5)",
		backgroundColor: "rgba(128, 128, 128, 0.5)",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: "0.5%",
		borderRadius: "5px"
	}

	let eachBot = botsList.map((bot) => {
		return (
			<NavLink
			to={`/Bots`}
			key={bot.id} 
			className="bot-lists"
			style={botCSS}
			onClick={
				function(e){
				// setID((currentID) => {return(currentID - currentID) + bot.id});
				// parseInt(e.target.children[2].innerHTML, 10)
				fetch(`http://localhost:8002/bots/${bot.id}`)
		  			.then((res) => res.json())
		  			.then((data) => {
						let botLi = document.createElement("li")
						botLi.innerHTML = `
						<img src=${bot.avatar_url} className="bot-image"></img>
						<p>${bot.name}</p>
						<p>${bot.id}</p>`;
						document.querySelector(".bot-army-row").appendChild(botLi);						
		  			});
				}
			}
			>
				<img src={bot.avatar_url} className="bot-image"></img>
				<p>{bot.name}</p>
				<p>{bot.id}</p>
			</NavLink>
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