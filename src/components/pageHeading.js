import React from "react";
import TeamSummary from "./teamSummary";

const Pageheading = () =>{
    return(
        <div className="row">
            <p className="col-md-5  col-10 heading"> The Creative Crew</p>
            <div className="col-md-1"></div>
            <div className="col-md-4 ">
                <p className="summaryheading">WHO ARE WE</p> 
                <TeamSummary/>
            </div>
        </div>
    )
}

export default Pageheading;