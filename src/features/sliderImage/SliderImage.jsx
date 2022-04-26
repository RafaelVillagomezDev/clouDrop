import { Container } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRamdomImageAsync } from './sliderImageSlice'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function SliderImage() {
 
  const [searchValue,setSearchValue]=useState("")

  const dispatch = useDispatch()
  const { images } = useSelector((state) => state.images)
  
  const handleChange=(e)=>{
    setSearchValue(e.currentTarget.value)
 }
 

  //Use effect me carga las imagenes
  // useEffect(() => {
    
  //   dispatch(getRamdomImageAsync(busqueda))
  // }, [dispatch])
  
  const busqueda= searchValue===""?"motos":searchValue
  
  useEffect(()=>{
   
    dispatch(getRamdomImageAsync(busqueda))
  },[searchValue])
 

  return (
    <Container maxWidth="2xl">
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 800,
          margin: 'auto',
        }}
       
        
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: 'black' }}
          placeholder="Search things ..."
          onChange={handleChange}
        />
        <IconButton type="submit" sx={{ padding: '12px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
  
      <ImageList
        sx={{ marginX: 2, marginTop: 6 }}
        variant="woven"
        cols={4}
        gap={12}
      >
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
    </Container>
  )
}
