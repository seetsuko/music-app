import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { AlcholList } from "../page/AlcholList";
import { AddAlchol } from "../page/AddAlchol";
import { DetailAlchol } from "../page/DetailAlchol";


export const  Router = () => {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alchol-list" element={<AlcholList />} />
      <Route path="/alchol-add" element={<AddAlchol />} />
      <Route path="/detail/:id" element={<DetailAlchol />} />
    </Routes>
  );
};