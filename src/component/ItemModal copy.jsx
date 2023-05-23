import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
import Kakao from "./Kakao";
function ItemModal({ hot, i, closeModal }) {
  console.log(hot);
  let dispatch = useDispatch();
  console.log(hot[i]);
  const handleClose = () => closeModal();
  // Item 정보
  const item = hot[i];

  return (
    <Modal show={true} onHide={handleClose}>
      {/* Header */}
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body>
        <Kakao item={item} />
        <div className="modalText">
          <stong>{item.title}</stong>
          <p>메인주소 :{item.addr ? item.addr : "데이터가 없습니다."}</p>
          <p>서브주소 :{item.dtlAddr ? item.dtlAddr : "데이터가 없습니다."}</p>
          <p>전화번호 :{item.tel ? item.tel : "데이터가 없습니다."}</p>
          <p>요약 :{item.summ ? item.summ : "데이터가 없습니다."}</p>
        </div>

        {/* ... */}
      </Modal.Body>

      {/* Footer */}
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
  );
}

export default ItemModal;
