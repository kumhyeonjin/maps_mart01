import { useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore";
import { Link } from "react-router-dom";
//
import ItemModalA from "./ItemModalA";
//

function Tour({ list }) {
  //
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  //
  let dispatch = useDispatch();
  //
  let [storage, setStorage] = useState([]);
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
                    a.tourspotNm,
                    a.tourspotAddr,
                    a.refadNo,
                    a.mapLat,
                    a.mapLot,
                    a.restrntSumm,
                    a.tourspotDtlAddr
                  );
                }}
              >
                <Link to="#" onClick={openModal}>
                  <p hidden>{i}</p>
                  <p>{a.tourspotNm}</p>
                </Link>
                <div className="listPer">
                  <button>like👍</button>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: i,
                          title: a.tourspotNm,
                          addr: a.tourspotAddr,
                          tel: a.refadNo,
                          mapLat: "a.mapLat",
                          mapLot: "a.mapLot",
                          summ: a.restrntSumm,
                          dtlAddr: a.tourspotDtlAddr,
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

export default Tour;
