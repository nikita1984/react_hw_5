import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    genderValue: 'Other',
    adultValue: 'No',
  },
  reducers: {
    handleSetChange: (state, action) => {
      switch (action.payload.name) {
        case "gender":
          state.genderValue = action.payload.value;
          break;
        case "age":
          state.adultValue = action.payload.value;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleSetChange } =
profileSlice.actions;

export default profileSlice.reducer;


