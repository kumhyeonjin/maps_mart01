import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
//
import list from "../PlaceListData";
import locations from "../locations";
import Food from "../component/Food";
import Tour from "../component/Tour";
import Room from "../component/Room";
import Shop from "../component/Shop";
import ItemModal from "../component/ItemModal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
//

function Self() {
  // let hot = useSelector((state) => state.hot);
  //
  const [DataF, setDataF] = useState([]);
  const [DataT, setDataT] = useState([]);
  const [DataR, setDataR] = useState([]);
  const [DataS, setDataS] = useState([]);
  // 요기에 1은 왜 어째서 ?
  const [selectedOption, setSelectedOption] = useState("1");

  let [locationList] = useState(locations);
  let [chooseGu, setChooseGu] = useState([]);
  let [recentItems, setRecentItems] = useState([]);
  let [Data, setData] = useState();
  let [Data2, setData2] = useState();
  const [id, setId] = useState();

  //modal=======//
  const [showModal, setShowModal] = useState(false);
  // const [id, setId] = useState(false);
  //뭐라는건지 ?
  const openModal = (e) => {
    setShowModal(true);
    e.preventDefault();
    console.log(showModal);

    const Hot = e.target.closest(".imgCon");
    const id = Hot.querySelector("span").textContent;
    console.log(id);
    // textContent 이게 뭐지 ? 그 밑에 왜 데이터 id 값을 넣으셨어요 ?
    setId(id - 1);
  };
  const closeModal = () => setShowModal(false);

  //========
  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    }

    setRecentItems(JSON.parse(savedData));
  }, []);
  //======================================

  const handleSearchGu = (e) => {
    const inputText = e.target.value.trim();
    setChooseGu(locationList[inputText]);

    const filteredData =
      inputText === "구전체" || null
        ? [...recentItems]
        : recentItems.filter((a) => {
            // 여기 뭔 지 모르겠다
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          });
    // 여기는 뭔가요 ?
    setData(filteredData);
    setData2(filteredData);
  };

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();
    console.log(inputText2);
    setData(
      inputText2 === "전체" || null
        ? [...Data2]
        : Data2.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText2)
            );
          })
    );
  };
  useEffect(() => {
    console.log(Data);
    if (!Data) {
      return;
    }
    // 이건 왜 이렇게 쓰는거지요 ? 대괄호 말이에요
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];

    //foreach의 역할이 모야?

    //여기서 데이터를 ~~ 레스토랑 네임이면 newF에 넣어줘 아니면 여기 아니면 여기 이런건 알겠어요
    Data.forEach((Data) => {
      if (Data.restrntNm) {
        newDataF.push(Data);
      } else if (Data.tourspotNm) {
        newDataT.push(Data);
      } else if (Data.romsNm) {
        newDataR.push(Data);
      } else if (Data.shppgNm) {
        newDataS.push(Data);
      }
    });
    console.log(newDataF);
    // 여기는 또 새로 담ㅁ는게 맞지요? ?
    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
  }, [Data]);
  //===============================
  // console.log(DataF);
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log(DataF);
  // ????

  let selectedComponent = null;
  if (selectedOption === "1") {
    selectedComponent = <Food list={DataF} />;
  } else if (selectedOption === "2") {
    selectedComponent = <Tour list={DataT} />;
  } else if (selectedOption === "3") {
    selectedComponent = <Room list={DataR} />;
  } else if (selectedOption === "4") {
    selectedComponent = <Shop list={DataS} />;
  }

  return (
    <div className="mainList">
      <section className="shop_sec1 mw">
        <div className="dj_area">
          <select className="dj_gu" onChange={handleSearchGu}>
            <option value="구전체">구 선택</option>
            <option value="서구">서구</option>
            <option value="동구">동구</option>
            <option value="중구">중구</option>
            <option value="유성구">유성구</option>
            <option value="대덕구">대덕구</option>
          </select>
          <select className="dj_dong" onChange={handleSearchDong}>
            <option value="전체">전체</option>
            {chooseGu.map((choose, i) => {
              return (
                <option value={choose} key={i}>
                  {choose}
                </option>
              );
            })}
          </select>
          <select className="dj_place" onChange={handleSelect}>
            {/* <option value="place">분류</option> */}
            <option value="1">음식점/카페</option>
            <option value="2">관광</option>
            <option value="3">숙박</option>
            <option value="4">쇼핑</option>
          </select>
        </div>
        <div className="bag">
          <Link to="/MyCart">
            <img src={`${process.env.PUBLIC_URL}/img/bag.png`} alt="bag" />
          </Link>
        </div>
      </section>

      <section className="shop_sec2">
        <h2 className="mw">
          <span>핫</span>플레이스
          {/* <img src={`${process.env.PUBLIC_URL}/img/hot.png`} alt="hot" /> */}
        </h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper1"
        >
          {list.map((item, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="imgCon">
                    <span hidden>{item.id}</span>
                    <Link to="#" className="hot_detail" onClick={openModal}>
                      more👀
                    </Link>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                      alt="hotplace"
                    />
                    <h3>{item.title}</h3>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
          {showModal && <ItemModal hot={list} i={id} closeModal={closeModal} />}
        </Swiper>
      </section>
      <section className="pick_list mw">
        <h2>
          <span>골라</span>담기
          {/* <img src={`${process.env.PUBLIC_URL}/img/pick.png`} alt="pick" /> */}
        </h2>

        <ul className="place_list">{selectedComponent}</ul>
      </section>
    </div>
  );
}

export default Self;
