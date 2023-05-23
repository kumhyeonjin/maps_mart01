import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/cartStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../component/Pagination";
//
function MyCart({list}) {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  console.log(cart);
//page//
let [currentPage, setCurrentPage] = useState(1);
let [itemsPerPage] = useState(10);
//
// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
// const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);
//
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};
  return (
    <>
      <div className="myCart">
        <div className="cartHd mw">
          <h3>담은 목록</h3>
          <Link to="/Self">X</Link>
        </div>
        <ul className="cart_list mw">
          {cart.map((a, i) => {
            return (
              <li className="cart_listCon" key={i}>
                <div className="listT">
                  <span>{a.title}</span>
                  <button
                    onClick={(e) => {
                      return dispatch(
                        deleteItem(
                          e.target.parentNode.querySelector(".listT > span")
                            .textContent
                        )
                      );
                    }}
                  >
                    삭제
                  </button>
                </div>
                <div className="listDec">
                  <p>
                    <span>주소: {a.addr}</span>
                  </p>
                  <p>
                    <span>번호: {a.tel}</span>
                  </p>
                  <p>
                    <span>정보: {a.summ}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        // totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      </div>
    </>
  );
}

export default MyCart;
