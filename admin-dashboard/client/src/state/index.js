import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    },
});

//  When call it, it's "action"
export const { setMode } = globalSlice.actions;

//  When change it, it's "reducer"
export default globalSlice.reducer;
