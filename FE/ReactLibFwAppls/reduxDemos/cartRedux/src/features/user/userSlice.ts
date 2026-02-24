import { createSlice, configureStore } from '@reduxjs/toolkit';

// --- User Slice ---
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest' },
  reducers: {
    setName: (state, action) => { state.name = action.payload; }
  }
});

export default userSlice.reducer;
export const { setName } = userSlice.actions;