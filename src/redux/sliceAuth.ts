import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = (() => {
    const api_key = localStorage.getItem("auth");
    return api_key || "";
})();

const sliceAuth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LOGIN(state, action: PayloadAction<string>) {
            return (state = action.payload);
        },
        LOGOUT(state) {
            localStorage.removeItem("auth");
            return (state = "");
        },
    },
});

export const { LOGIN, LOGOUT } = sliceAuth.actions;
export default sliceAuth.reducer;
