import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  isOpenModal: false,
  mode: "Create",
  collection: "Movie",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIdItem: (state, action) => {
      state.id = action.payload;
    },
    setModeModal: (state, action) => {
      state.mode = action.payload;
    },
    setCollectionModal: (state, action) => {
      state.collection = action.payload;
    },
    setIsOpenModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const { setIsOpenModal, setCollectionModal, setModeModal, setIdItem } =
  modalSlice.actions;

export default modalSlice.reducer;
