import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import modeApi, { Mode } from "../api/mode";

const initialState = {
    modes: [],
};

export const modesSlice = createSlice({
    name: "modes",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            modeApi.endpoints.getAllModes.matchFulfilled,
            (state, { payload }: PayloadAction<any>) => {
                state.modes = payload;             
            }
        );
    },
});

export default modesSlice.reducer;