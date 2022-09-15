import { profileinformation } from "../profileInformation";
import Teamprofile from "./teamProfile";
import React from "react"; 

const Mainpage = () =>{
    return(
        <div className="row mainpage">
            {profileinformation.map((data,key)=>{
                return(
                    <div className="col-md-4    col-6  profile">
                        <Teamprofile
                            picture = {data.picture}
                            name = {data.name}
                            role = {data.role}
                        />
                       
                    </div>
                )
            })}
        </div>
    )
}

export default Mainpage;