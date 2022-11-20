import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  loggedinId: "",
  loggedinPosition: "",
  fetchUrl: "",
  fetchMethod: "",
};

const loginSlice = createSlice({
  name: "isLoggedinSlice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.isLoggedin = true;
      state.fetchUrl = action.payload.fetchUrlparam;
      state.fetchMethod = action.payload.fetchMethodparam;
      state.loggedinPosition = action.payload.loggedinPositionparam;
    },
    logout(state) {
      state.isLoggedin = false;
    },
    loggedinChecker(state, action) {
      state.loggedinId = action.id;
    },
  },
});

const store = configureStore({
  reducer: { loginReducer: loginSlice.reducer },
});

export const loginActions = loginSlice.actions;

export default store;
