import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Shop({ list }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  let [storage, setStorage] = useState([]);
  let dispatch = useDispatch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
  const [showModalT, setShowModalT] = useState(false);
  const openModal = (e) => {
    setShowModalT(true);
    e.preventDefault();
  };
  const closeModal = () => setShowModalT(false);
  console.log(storage);
  return (
    <>
      <section className=" selfList">
        {currentData.map((a, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                saveDataToLocalStorage(
                  a.shppgNm,
                  a.shppgAddr,
                  a.shppgInqrTel,
                  a.mapLat,
                  a.mapLot,
                  a.shppgIntrd,
                  a.shppgDtlAddr
                );
              }}
            >
              <Link to="#" onClick={openModal}>
                <div className="Text">
                  <span hidden>{i}</span>
                  <span>{a.shppgNm}</span>
                </div>
              </Link>
              <div className="Fn">
                <img src="/img/favorites.svg" alt="북마크" />
                <button
                  onClick={() => {
                    dispatch(
                      addItem({
                        id: i,
                        title: a.shppgNm,
                        addr: a.shppgAddr,
                        tel: a.shppgInqrTel,
                        mapLat: a.mapLat,
                        mapLot: a.mapLot,
                        summ: a.shppgIntrd,
                        dtlAddr: a.shppgDtlAddr,
                      })
                    );
                  }}
                >
                  담기
                </button>
              </div>
            </p>
          );
        })}
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {showModalT && (
        <ItemModalA currentData={storage} closeModal={closeModal} />
      )}
    </>
  );
}
export default Shop;
