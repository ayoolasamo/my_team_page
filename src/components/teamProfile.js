import React from "react";

const Teamprofile = ({picture, name, role}) =>{
    return(
        <div className="">
            <div className="image">
                <div  className= "img-wrapper row">
                    <img alt='profile'  className="col-md-10 col-10" src={picture} style={{margin:"",paddingRight:"0px"}} /> 
                    <div  className="col-md-2 col-1" style={{writingMode: "vertical-lr", padding:"0px", fontSize:"1.15rem"}}>{role}</div>
                </div>
                   
                <p style={{fontWeight:"bolder", marginTop:"4%", fontFamily:"poppins"}}>{name}</p>
            </div>
       

        </div>
    )
}

export default Teamprofile;