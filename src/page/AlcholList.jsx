import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageQuery, pagination } from "../atom/pagination";
import "../css/AlcholList.css";

// import { Link } from "react-router-dom";

export const AlcholList = () => {

  const [ list, setList ] = useState();
  const [ pageNum, setPageNum ] = useRecoilState(pagination);
  const offset = useRecoilValue(pageQuery);

  useEffect(()=>{
  axios
  .get("http://localhost:3100/list")
  .then((res)=>{
    setList(res.data);
    console.log(res.data);
  });
  },[]);

  const handlePaginate = (page) =>{
    setPageNum(page);
  };

  // APIのoffsetに使う
  // console.log(offset);
  

  return(
    <div>
      <h2>お酒一覧</h2>
      <Link to="/alchol-add">追加する</Link>
       {/* ページネーションコンポーネント */}
        {/* <Pagination
        count={10}          // 総ページ数
        color="secondary"     // ページネーションの色
        // 変更されたときに走る関数。第2引数にページ番号が入る
        onChange={(e, page) =>{
        handlePaginate(page);
        }}  
        className="paginate"
      /> */}
      <ul>
        {list?.map((data)=>{
          return(
            <li key={data.id}>
              <Link to={
                `/detail/${data.id}`} state={{alcholData:data}}>
                  <p>{data.name}</p>
                  <img className="alcholImage" alt="お酒の画像" src={data.image}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};