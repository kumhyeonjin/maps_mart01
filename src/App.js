import { Link } from "react-router-dom";
//
import { Route, Routes } from "react-router-dom";
import "./css/App.css";
//
import Header from "./pages/Header";
import Main from "./pages/Main";
import Self from "./pages/Self";
import MyCart from "./pages/MyCart";
import Footer from "./pages/Footer";

//
import { useState, useEffect } from "react";
import axios from "axios";
//

//=====================================================================================================
function App() {
  // try가 모야?이렇게 담으라는건가? fetchData는 그냥 이름을 본인이 설정하는거지요? / axios 역할이 뭔가요? /
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=MamXm2XjR9Aha2%2BnrA0%2BypB8hSmh3ryH6MP8skHwYUeqEYXY8zEbd38O8YvwnxobFNZ47Non7PFp5VwUPUWYEw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response2 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=MamXm2XjR9Aha2%2BnrA0%2BypB8hSmh3ryH6MP8skHwYUeqEYXY8zEbd38O8YvwnxobFNZ47Non7PFp5VwUPUWYEw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response3 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=MamXm2XjR9Aha2%2BnrA0%2BypB8hSmh3ryH6MP8skHwYUeqEYXY8zEbd38O8YvwnxobFNZ47Non7PFp5VwUPUWYEw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response4 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=MamXm2XjR9Aha2%2BnrA0%2BypB8hSmh3ryH6MP8skHwYUeqEYXY8zEbd38O8YvwnxobFNZ47Non7PFp5VwUPUWYEw%3D%3D&pageNo=1&numOfRows=1000"
        );
        //  위의 것들을 합치겠다는 뜻
        const mergedData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );
        //이게뭐더라? //여기까지 작성중에 try가 계속 오류가 났는데 이걸 작성하니 빨간줄이 사라졌다 왜지 ?
        localStorage.setItem("data", JSON.stringify(mergedData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Self" element={<Self />}></Route>
        <Route path="/MyCart" element={<MyCart />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
