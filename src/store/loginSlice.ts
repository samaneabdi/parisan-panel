import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const token = JSON.parse(localStorage.getItem("token") || "null");
const profile = JSON.parse(localStorage.getItem("profile") || "null");
axios.defaults.headers.common["Authorization"] = `bearer ${token}`;

type LoginType = {
    userName: string,
    password: string,
}
type Profile = {
    Tel: string;
    NameSurname: string;
    nCustomerID: number;
    Address: string;
    CustomerClubPoints: string;
    ReferalPoints: string;
    Last10OrderAvg: string;
};

export interface LoginState {
    validationErrors: object;
    login: LoginType;
    token: string;
    profile: Profile;
}

const initialLogin ={
    userName: "",
    password: ""
}

const initialState: LoginState = {
    validationErrors: {},
    login: initialLogin,
    token: token,
    profile: profile,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
        state.login = { ...state.login, ...action.payload };
    },
    setToken: (state, action) => {
        state.token = action.payload;
    },
    setProfile: (state, action) => {
        const { Tel, NameSurname, nCustomerID, Address, CustomerClubPoints, ReferalPoints,
                Last10OrderAvg  } = action.payload;
        state.profile = { Tel, NameSurname, nCustomerID, Address, CustomerClubPoints,
                ReferalPoints, Last10OrderAvg };
    },
    setValidationErrors: (state, action) => {
        state.validationErrors = { ...action.payload };
    },
    resetValidationErrors: (state) => {
        state.validationErrors = {};
    },
  },
})

export const { setLogin, setProfile, setToken, setValidationErrors, resetValidationErrors } = loginSlice.actions

export default loginSlice.reducer