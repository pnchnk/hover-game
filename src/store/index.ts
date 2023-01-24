import { configureStore } from '@reduxjs/toolkit'
import {modeApi} from './api/mode'
import modesReducer from './slices/mode'
import hoveredReducer from './slices/hovered'


export const store = configureStore({
    reducer: {
      modes: modesReducer,
      hovered: hoveredReducer,
      [modeApi.reducerPath]: modeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modeApi.middleware),
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch