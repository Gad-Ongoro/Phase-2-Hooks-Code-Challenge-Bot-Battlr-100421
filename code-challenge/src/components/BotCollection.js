import React, {useState} from "react";
import { NavLink, Routes, Route } from "react-router-dom";

function BotCollection({botsList, setBotsList}) {
  	// Your code here
	const [id, setID] = useState(101);

	let botCSS = {
		width: "100%",
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
			<div className="bot-list" key={bot.id}>
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
							let botLi = document.createElement("li.soldier")
							botLi.style.cssText = `
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
							`
							botLi.innerHTML = `
							<img src=${bot.avatar_url} className="bot-image"></img>
							<h3>${bot.name}</h3>
							<p>ID: ${bot.id}</p>`;
							document.querySelector(".bot-army-row").appendChild(botLi);				
						});
					}
				}
				>
					<img src={bot.avatar_url} className="bot-image"></img>
					<h3>{bot.name}</h3>
					<p>{bot.catchphrase}</p>
					<p>ID: {bot.id}</p>
				</NavLink>
				<p 
				style={{color:"red", width:"100%", textAlign:"center", color:"white", backgroundColor:"red", height:"30px", cursor:"pointer"}}
				onClick={
				function(){
					fetch(`http://localhost:8002/bots/${bot.id}`, {
						method: "DELETE"
					})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						botsList.filter(()=> {
							return(bot.id == true)
						})
						setBotsList(botsList);
					})
				}
				}
				>
					X
				</p>
			</div>
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