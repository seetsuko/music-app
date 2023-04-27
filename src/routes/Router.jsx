import { Route, Routes } from "react-router-dom";
import { LogIn } from "../account/LogIn";
import { SignUp } from "../account/SignUp";
import { User } from "../account/User";
import { EditUser } from "../account/EditUser";
import { Home } from "../page/Home";

export const  Router = () => {

  return(
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<User />} />
      <Route path="/edituser" element={<EditUser />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};