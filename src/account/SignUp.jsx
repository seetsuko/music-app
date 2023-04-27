// import dayjs from "dayjs";

export const SignUp = () => {


  return(
    <div>
      <form>
        <div>
          <label htmlFor="name">
            ユーザーネーム
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="e-mail">
            メールアドレス
            <input type="e-mail" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            パスワード
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="gender">
            性別
            <input type="radio" name="gender" value="M" checked/>男性
            <input type="radio" name="gender" value="F"/>女性
          </label>
        </div>
        <div>
          <label htmlFor="birthday">
            生年月日
            <input 
              type="datetime-local"
              step="1"/>
          </label>
        </div>
        <div>
          <label htmlFor="health">
            体重 
            <p>※血中濃度算出に使います。未入力の場合は平均を基準に算出します。</p>
            {/* <select name="year"> */}
<option value="">-</option>
          </label>
        </div>
      </form>
    </div>
  );
};