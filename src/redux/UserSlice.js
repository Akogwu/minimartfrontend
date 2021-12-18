import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user:{}
  },
  reducers:{
    loginUser:(state,action) => {
      state.user =  action.payload.user;
    }
  }

});

export const {loginUser} = userSlice.actions;
export default userSlice.reducer;