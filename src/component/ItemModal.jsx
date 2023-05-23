import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore";

// import Kakao from "./Kakao";
function ItemModal({ hot, i, closeModal }) {
  // console.log(hot[i].id);
  // console.log(hot[i]);
  let dispatch = useDispatch();
  let item = hot[i];
  const handleClose = () => closeModal();
  // Item 정보

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>{item.title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>도로명주소: {item.addr ? item.addr : "데이터가 없습니다"}</p>
            <p>번지수: {item.dtlAddr ? item.dtlAddr : "데이터가 없습니다"}</p>
            <p>전화번호: {item.tel ? item.tel : "데이터가 없습니다"}</p>
            <p>설명: {item.summ ? item.summ : "데이터가 없습니다"}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              dispatch(
                addItem({
                  title: item.title,
                  addr: item.addr,
                  tel: item.tel,
                  mapLat: item.mapLat,
                  mapLot: item.mapLot,
                  summ: item.summ,
                  dtlAddr: item.dtlAddr,
                })
              );
            }}
          >
            담기
          </button>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemModal;
