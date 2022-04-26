import axios from "axios";
const {REACT_APP_API_KEY_PRODUCTION,REACT_APP_BASE_URL}=process.env

// //Peticion api , debe devolver imagenes 
export  async function fetchImages(busqueda) {
  
    return await axios.get(`${REACT_APP_BASE_URL}search/photos?query=${busqueda}&page=1&per_page=48&client_id=${REACT_APP_API_KEY_PRODUCTION}`).then(
        (res)=>res.data.results
      );

 }


 
