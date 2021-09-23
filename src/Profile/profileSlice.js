import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    genderValue: 'Other',
    adultValue: 'No',
  },
  reducers: {
    handleSetChange: (state, action) => {
      state.messagesArray.push(action.payload);
      switch (action.payload.target.name) {
        case "gender":
          state.genderValue = action.payload.target.value;
          break;
        case "age":
          state.adultValue = action.payload.target.value;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleSetChange } =
profileSlice.actions;

export default profileSlice.reducer;


