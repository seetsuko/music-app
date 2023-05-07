import { useState } from "react";
import { useLocation } from "react-router-dom";

export const DetailAlchol = () =>{

  const { state } = useLocation();
  const alcholData = state.alcholData;
  // const [ alcholData, setAlcholData ] = useState();

  console.log(alcholData);

  return(
    <div>
      <h2>{alcholData.name}</h2>
      <h3>種類</h3>
      <p>{alcholData.type}</p>
      <h3>特徴</h3>
      <p>{alcholData.detail}</p>
      <h3>度数</h3>
      <p>{alcholData.alchol}</p>
  
    </div>
  );
};