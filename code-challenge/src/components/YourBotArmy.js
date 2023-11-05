import React from "react";
import BotCollection from "./BotCollection";

function YourBotArmy({botsList}) {
    //your bot army code here...
    let army = botsList.map((bot) => {
        return(
            <li key={bot.id}>
                <img src={bot.avatar_url}></img>
				<p>{bot.name}</p>
            </li>
        )
    })


    return (
        <div className="ui segment ,inverted olive bot-army">
            <div className="ui five column grid">
                <div className="row bot-army-row">
                {/*...and here...*/}
                <ul>
                    {army}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default YourBotArmy;
