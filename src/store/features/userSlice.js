import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserPresent: false,
    value: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = {
                email: action.payload.email,
                userId: action.payload.id,
            };
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
