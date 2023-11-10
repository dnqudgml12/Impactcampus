import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MentoinformContext } from "../../Contextapi/Context";
const Mentoprofile=()=>{
    const { mentoinform } = useContext(MentoinformContext);
    const { id } = useParams();
    const mento = mentoinform.find((m)=>m.id === parseInt(id));


    

    return(
        <>
        <div>선배{mento.name}</div>
        <div>선배{mento.introduce}</div>
        </>
    )

}


export default Mentoprofile;