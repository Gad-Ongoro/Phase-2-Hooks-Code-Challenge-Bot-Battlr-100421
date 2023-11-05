import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function BotCollection({botsList}) {
  	// Your code here

	let eachBot = botsList.map((bot) => {
		return (
			<NavLink key={bot.id}>
				<img src={bot.avatar_url}></img>
				<p>{bot.name}</p>
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