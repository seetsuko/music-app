import axios from "axios";

export const Home = () => {

  const number = () =>{
    const items = [];
    for (let i = 0; i <= 30; i++) {
      items.push(<option key={i}>{i}</option>);
    }
    return <select>{ items }</select>;
  };

  // axios
  // .get("http://www.thecocktaildb.com/api/json/v1/1/ search.php?s=margarita")
  // .then((res)=>{
  //   console.log(res);
  // });

  return(
    <div>
      <div>HOME</div>
      {/* <p>血中アルコール濃度（%）=｛飲酒量（ml）×アルコール度数（%）｝÷｛833×体重（kg）｝×100</p>
      <form>
        <label htmlFor="beer">ビール
        {number()}</label>
      </form> */}

    </div>
  );
};