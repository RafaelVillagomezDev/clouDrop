import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchImages, fetchDowloadImage } from './unplashAPI'

//Funcion que me devuelve un array de objetos de mi local Storage
function getImageObjectStorage() {
  if (localStorage.getItem('imageObject')) {
    return JSON.parse(localStorage.getItem('imageObject'))
  }
  return []
}
//Funcion para  guardar images en mi local Storage , los objetos los guardamos como string set(clave,valor)
function saveImageObjectStorage(images) {
  localStorage.setItem('imageObject', JSON.stringify(images))
}

//Funcion asincrona me devuelve lista de imagenes
export const getRamdomImageAsync = createAsyncThunk(
  'sliderImage/fetchRamdomImage',
  async (busqueda) => {
    return await fetchImages(busqueda)
  },
)
//Funcion asincrona para descargar imagenes mediante Api de unplash usando js-file
export const dowloadImage = createAsyncThunk('dowloadImage', async (objeto) => {
  return await fetchDowloadImage(objeto)
})

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
      //Metodo para que no se repitan imagenes y se almacenen en el local Storage

      state.myImages = state.myImages.filter(
        (img) =>
          !JSON.stringify(img.id)
            .toLocaleLowerCase()
            .includes(action.payload.id.toLocaleLowerCase()),
      )
      state.myImages = [...state.myImages, action.payload]

      saveImageObjectStorage(state.myImages)
    },
    deleteImage: (state, action) => {
      //Metodo para borrar imagenes dado click al evento , surge el problema de que estas imagenes son un objeto he de
      //ahi el Object entries para transformarlas a un array . Tambien hay otro problema son mutables debido al estado
      //No ponerlas en constantes o variables , queremos modificar el estado , ojito a la direccion de memoria donde apunta .
      const pos = state.myImages.findIndex((img) => img.id === action.payload)
      state.myImages.splice(pos, 1)
      Object.entries(state.myImages)
      saveImageObjectStorage(state.myImages)
    },
     editDescription:(state,action)=>{
     //Metodo e

      const {id,description}=action.payload
      const listEdit = [...state.myImages];
      const image = listEdit.find((img)=>img.id===id);
       image.description = description;
       state.myImages = listEdit;
      saveImageObjectStorage(state.myImages)

     
       
  
     }
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
//Constante me devuleve mi array de imagenes del estado
export const favImages = (state) => state.images.myImages
export const { addImage, deleteImage,editDescription } = sliderImageSlice.actions
