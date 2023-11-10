import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MentoinformContext } from "../../Contextapi/Context";
const Mento = () =>{
    const {mentoinform} = useContext(MentoinformContext);
    
    return(
        <div>
    {mentoinform.map((mento,index)=>(
            <div key={index}>
                <Link to={`${mento.id}`}>
                <div>{mento.name}</div>
                <div>{mento.introduce}</div>
                <div>{mento.id}</div>
                </Link>

            </div>
        ))}
        
        
        </div>
    );
};


export default Mento;