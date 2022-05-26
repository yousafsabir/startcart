import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserPresent: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onLoginSignup: (state, action) => {
            state.isUserPresent = true;
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
