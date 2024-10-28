import { configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from '../store/middleware/listener'
import loginSlice from '../store/loginSlice'

export const store = configureStore({
  reducer: {login: loginSlice},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch