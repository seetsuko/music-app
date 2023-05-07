import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddAlchol = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const navigation = useNavigate();
  const [ image, setImage ] = useState("http://design-ec.com/d/e_others_47/l_e_others_474.png");
  const [ errorMessage, setErrorMessage ] = useState("");

// APIレスポンス時にURL化する
  // const handleImageChange = (e) => {
  //   const imageUrl = URL.createObjectURL(e.target.files[0]);
  //   setImage(imageUrl);
  // };
  // console.log(image);

  const onSubmit = async(data) =>{
    const obj = data;
    obj.image = image;

    console.log(obj);
    await axios
    .post("http://localhost:3100/list",obj,{
    })
    .then((res)=>{
      console.log(res);
      navigation("/alchol-list");
    })
    .catch((err)=>{
      setErrorMessage("登録に失敗しました。");
      console.log(err);
    });
  };

  return(
    <div>
      <h2>お酒の追加</h2>
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="new-form">
        <div>
          <label htmlFor="type">お酒の種類<br/>
          <select
            {...register("type",{required:true})}
          >
            <option>ビール</option>
            <option>ワイン</option>
            <option>日本酒</option>
            <option>焼酎</option>
            <option>ウイスキー</option>
            <option>カクテル</option>
            <option>その他</option>
          </select></label>
          {errors.type && <div className="error">種類を選んでください</div>}
        </div>
        <div>
          <label htmlFor="name">お酒の名前<br/>
          <input
            type="text"
            {...register("name",{required:true})}
          /></label>
          {errors.name && <div className="error">お酒の名前を入力してください</div>}
        </div>
        <div>
          <label htmlFor="alchol">度数<br/>
          <input
            type="number"
            min={0}
            {...register("alchol",{required:true})}
          /></label>
          {errors.alchol && <div className="error">アルコール度数を入力してください</div>}
        </div>
        <div>
          <label htmlFor="detail">特徴<br/>
          <input
            type="text"
            {...register("detail")}
          /></label>
        </div>
        {/* 画像登録 一旦なし */}
        {/* <div>
          <div>
            <img 
              alt="アイコン画像" 
              src={image} 
              className="icon"/>
          </div>
          <input 
            type="file" 
            accept="image/png, image/jpg"
            onChange={handleImageChange}
            />
        </div> */}
        <div className="submit-btn">
        <button  type="submit">登録</button>
        </div>
      </form>
    </div>
  );
};