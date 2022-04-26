
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRamdomImageAsync } from "./sliderImageSlice";

export default function SliderImage() {
 
  const dispatch = useDispatch();
  const {images}=useSelector((state)=>state.images);
  const busqueda="motos"
  useEffect(()=>{
    dispatch(getRamdomImageAsync(busqueda));
  },[dispatch])

    return (
        
        <ImageList sx={{ marginX:2 ,marginTop:6 , }} variant="woven" cols={4}  gap={12}>
        {images.map((item) => (
          
          <ImageListItem key={item.id}>
            <img
              src={`${item.urls.full}`}
              srcSet={`${item.urls.full}`}
              alt={`${item.id}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    
      );
   
}  

