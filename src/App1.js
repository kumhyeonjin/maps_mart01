import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import "./css/App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// ===========================================================================
import Main from "./pages/Main";
import Self from "./pages/Self";
import Cart from "./pages/Cart";
import MainList from "./pages/MainList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Tour from "./component/Tour1";
import Food from "./component/Food1";
import Shopp from "./component/Shop1";
import Room from "./component/Room1";
// ===========================================================================
function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response2 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response3 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response4 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=100"
        );

        const mergedData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );

        localStorage.setItem("data", JSON.stringify(mergedData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // ===========================================================================

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/MainList" element={<MainList />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Self" element={<Self />}>
          {/* <Route path="/Self/Tour" component={<Tour />} />
          <Route path="/Self/Food" component={<Food />} />
          <Route path="/Self/Shopp" component={<Shopp />} />
          <Route path="/Self/Room" component={<Room />} /> */}
        </Route>
        {/* <Route path="/detail/:id" element={<Detail list={products} />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
