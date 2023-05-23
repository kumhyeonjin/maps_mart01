import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore";
import { Link } from "react-router-dom";
//
import ItemModalA from "./ItemModalA";

function Food({ list }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  //
  let [storage, setStorage] = useState([]);
  //
  let dispatch = useDispatch();

  //
  let cart = useSelector((state) => state.cart);
  console.log(cart);

  //
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);

  //========================================
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ///=====modal====
  const saveDataToLocalStorage = (
    title,
    addr,
    tel,
    mapLat,
    mapLot,
    summ,
    dtlAddr
  ) => {
    const data = { title, addr, tel, mapLat, mapLot, summ, dtlAddr };
    localStorage.setItem("selected", JSON.stringify(data));
    setStorage([data]);
  };
  const [showModalH, setShowModalH] = useState(false);

  const openModal = (e) => {
    setShowModalH(true);
    e.preventDefault();
  };
  const closeModal = () => setShowModalH(false);

  return (
    <>
      <section className="shop_sec3 mw">
        <ul className="place_list">
          {currentData.map((a, i) => {
            return (
              <li
                className="listCon"
                key={i}
                onClick={() => {
                  saveDataToLocalStorage(
                    a.restrntNm,
                    a.restrntAddr,
                    a.restrntInqrTel,
                    a.mapLat,
                    a.mapLot,
                    a.restrntSumm,
                    a.restrntDtlAddr
                  );
                }}
              >
                <Link to="#" onClick={openModal}>
                  <p hidden>{i}</p>
                  <p>{a.restrntNm}</p>
                </Link>
                <div className="listPer">
                  <button>like👍</button>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          title: a.restrntNm,
                          addr: a.restrntAddr,
                          tel: a.restrntInqrTel,
                          summ: a.restrntSumm,
                          dtlAddr: a.restrntDtlAddr,
                        })
                      );
                    }}
                  >
                    담기
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {showModalH && (
        <ItemModalA currentData={storage} closeModal={closeModal} />
      )}
    </>
  );
}

export default Food;
