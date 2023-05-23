import React from "react";
import { Modal } from "react-bootstrap";
import { addItem, deleteItem } from "../store/cartStore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// import Kakao from "./Kakao";

function ItemModalA({ currentData, closeModal }) {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  console.log(cart);

  // 모달 창 열고 닫기
  console.log(currentData);

  const handleClose = () => closeModal();
  // Item 정보
  const item = currentData[0];
  // const [isOn, setIsOn] = useState(false);

  // const handleToggle = () => {
  //   setIsOn(!isOn);
  //   console.log(isOn);
  // };
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>{item.title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{item.title}</h4>
          <p>
            <div>
              <p>도로명주소: {item.addr ? item.addr : "데이터가 없습니다"}</p>
              <p>번지수: {item.dtlAddr ? item.dtlAddr : "데이터가 없습니다"}</p>
              <p>전화번호: {item.tel ? item.tel : "데이터가 없습니다"}</p>
              <p>설명: {item.summ ? item.summ : "데이터가 없습니다"}</p>
            </div>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              dispatch(
                addItem({
                  title: item.title,
                  addr: item.addrr,
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

export default ItemModalA;
