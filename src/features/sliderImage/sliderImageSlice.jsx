import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchRamdomImage} from "./unplashAPI";

const initialState = {
  value: 0,
  status: 'idle',
}

//Peticion a la Api unplash para devolver imagenes ramdom
export const getRamdomImageAsync = createAsyncThunk(
  'sliderImage/fetchRamdomImage',
  async (amount) => {
    const response = await fetchRamdomImage(amount)
  
    return response.data
  },
)

export const sliderImageSlice = createSlice({
  name: 'sliderImage',
  initialState,
  reducers: {

  }

})

export default sliderImageSlice.reducer
