import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MentoinformContext } from "../../Contextapi/Context";
const Mento = () =>{
    const {mentoinform} = useContext(MentoinformContext);

    const [text,settext] = useState();

    

    const Chnage= (e)=>{
    
            e.preventDefault();
            settext(e.target.value);
        

    }
    
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
        
        {/*
        <input type="text"  onChange={Chnage}/>
        <div>{text}</div>
    */}
        </div>
    );
};


export default Mento;