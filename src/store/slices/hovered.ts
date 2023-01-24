import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  hovered: [],
};

const hoveredSlice = createSlice({
  name: "hovered",
  initialState,
  reducers: {
    addToArr: (state, { payload }: PayloadAction<any>) => {
      state.hovered.push({ ...payload });
    },
    deleteFromArr: (state, { payload }) => {
      const id = payload.id;
      state.hovered = state?.hovered?.filter((item: any) => item.id !== id);
    },
    clearArr: (state ) => {
      state.hovered = [];
    },
  },
});

export const { addToArr, deleteFromArr, clearArr } = hoveredSlice.actions;
export default hoveredSlice.reducer;
