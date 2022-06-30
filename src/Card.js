import React from "react";

const Card=(props)=>{
    return(
        <div className="bg-light-blue dib br3 ma3 grow pa3 bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?100x100`} alt="robot" />
            <div>
                <h2 className="tc">{props.name}</h2>
                <p className="tc">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;