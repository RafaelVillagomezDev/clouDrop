import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchImages } from './unplashAPI'



function getImageObjectStorage() {
  if (localStorage.getItem('imageObject')) {
    return JSON.parse(localStorage.getItem('imageObject'))

  }
  return []
}

function saveImageObjectStorage(images) {
  localStorage.setItem('imagesObject', JSON.stringify(images))
  
}


//Funcion asincrona me devuelve lista de imagenes
export const getRamdomImageAsync = createAsyncThunk(
  'sliderImage/fetchRamdomImage',
  async (busqueda) => {
    return await fetchImages(busqueda)
  },
)

const initialState = {
  images: [],
  myImages: getImageObjectStorage(),
  status: null,
}

export const sliderImageSlice = createSlice({
  name: 'sliderImage',
  initialState,
 
    reducers: {
      addImage: (state, action) => {

        state.myImages=[...state.myImages,action.payload]
      
        saveImageObjectStorage(state.myImages)
    
         
      },
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


export default sliderImageSlice.reducer
export const  favImages=(state)=> state.images.myImages
export const { addImage } = sliderImageSlice.actions