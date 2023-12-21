import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state,action) {
      state=action.payload;
    },
    removeUser(state) {
      state=null;
    },
  },
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;