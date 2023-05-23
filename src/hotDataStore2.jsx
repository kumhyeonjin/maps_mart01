import { configureStore, createSlice } from "@reduxjs/toolkit";
import hotDataList from "./hotdata";
let hot = createSlice({
  name: "hot",
  initialState: hotDataList,
});
export default hot;
