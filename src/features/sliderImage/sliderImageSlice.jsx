import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchImages } from './unplashAPI'
const initialState = {
  images: [],
  status: null,
}

//Funcion asincrona me devuelve lista de imagenes
export const getRamdomImageAsync = createAsyncThunk(
  'sliderImage/fetchRamdomImage',
  async (busqueda) => {
    return await fetchImages(busqueda)
  },
)
//NO ENTIENDO POR QUE FALLA COMO LO TENIAN ANTES , IGUAL Q EL COUNTER

export const sliderImageSlice = createSlice({
  name: 'sliderImage',
  initialState,
  reducers: {
    //REDUCERS AQUI
  },
  // extraReducers permite que el slice maneje acciones definidas en otro lugar ,
  // esto incluyes acciones creadas con AsyncThunk en otros lugares.
  extraReducers: (builder) => {
    builder
      .addCase(getRamdomImageAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getRamdomImageAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.images = action.payload
      })
      .addCase(getRamdomImageAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

// export const { setImageList } = sliderImageSlice.actions;

export default sliderImageSlice.reducer
