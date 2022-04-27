import { Container, ImageListItemBar } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRamdomImageAsync } from './sliderImageSlice'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function SliderImage() {



  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  const { images } = useSelector((state) => state.images)

  const handleChange = (e) => {
    setSearchValue(e.currentTarget.value)
  }

  

  const busqueda = searchValue === '' ? 'motos' : searchValue

  useEffect(() => {
    dispatch(getRamdomImageAsync(busqueda))
  }, [searchValue])

  return (
    <Container maxWidth="2xl">
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth:'xs',
          maxWidth:'md',
        
          margin: 'auto'
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
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                <AddAPhotoIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
