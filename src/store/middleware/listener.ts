import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setProfile, setToken } from "../loginSlice";
import { RootState } from "../../app/store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(setToken, setProfile),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      "token",
      JSON.stringify((listenerApi.getState() as RootState).login.token)
    );
    localStorage.setItem(
      "profile",
      JSON.stringify((listenerApi.getState() as RootState).login.profile)
    );
  },
});
