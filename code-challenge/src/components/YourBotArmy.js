import React, {useState, useEffect} from "react";

function YourBotArmy({botsList}) {
    //your bot army code here...
    const [state, setState] = useState(101);

    let botSoldier = botsList.map((bot) => {
		return (
			<div className="bot-list" key={bot.id}>
				<div
				onClick={
					function(e){
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
				</div>
				<p 
				style={{color:"red", width:"100%", textAlign:"center", color:"white", backgroundColor:"red", height:"30px", cursor:"pointer"}}
				onClick={``}
				>
					X
				</p>
			</div>
		)
	})

    return (
        <div className="ui segment ,inverted olive bot-army">
                <div className="row bot-army-row">
                {/*...and here...*/}
                {/* {botSoldier} */}
                </div>
        </div>
    );
}

export default YourBotArmy;
