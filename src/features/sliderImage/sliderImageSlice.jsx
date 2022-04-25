import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const {REACT_APP_API_KEY_PRODUCTION,REACT_APP_BASE_URL}=process.env

const initialState = {
  images: [],
  status: null,
}


//Peticion a la Api unplash para devolver imagenes ramdom
export const getRamdomImageAsync = createAsyncThunk(
  'sliderImage/fetchRamdomImage',
  async (busqueda)=>{
     
     return await axios.get(`${REACT_APP_BASE_URL}search/photos?query=${busqueda}&page=1&per_page=48&client_id=${REACT_APP_API_KEY_PRODUCTION}`).then(
       (res)=>res.data.results
     );
  }
);
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
        state.status = 'loading';
      })
      .addCase(getRamdomImageAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.images= action.payload;
      }).addCase(getRamdomImageAsync.rejected,(state)=>{
          state.status="failed"
      });
  },

})




// export const { setImageList } = sliderImageSlice.actions;

export default sliderImageSlice.reducer
