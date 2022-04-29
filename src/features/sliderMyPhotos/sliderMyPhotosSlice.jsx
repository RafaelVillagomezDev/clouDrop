import { createSlice } from "@reduxjs/toolkit"

function getImageObjectStorage() {
  if (localStorage.getItem('imageObject')) {
    return JSON.parse(localStorage.getItem('imageObject'))
  }
  return []
}

function saveImageObjectStorage(images) {
  localStorage.setItem('imagesObject', JSON.stringify(images))
}

const initialState = {
  myImages: getImageObjectStorage(),
  status: null,
}


export const sliderMyPhotosSlice = createSlice({

    name: 'sliderMyPhoto',
    initialState,
    reducers: {
      addImage: (state, action) => {
        
        saveImageObjectStorage(action.payload)
       return state.myImages.push(action.payload)
      },
    },


})

export const { addImage } = sliderMyPhotosSlice.actions
export const  favImage=(state)=> state.myImages
export default sliderMyPhotosSlice.reducer