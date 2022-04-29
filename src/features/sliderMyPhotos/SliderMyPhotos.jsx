import { Container, IconButton, InputBase, Paper } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import { ImageList } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ImageListItemBar } from '@mui/material'
import { ImageListItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { favImages, findImageFav } from '../sliderImage/sliderImageSlice'
import { useEffect, useState } from 'react'

export default function SliderMyPhotos() {
  const [searchDescription, setSearchDescription] = useState()

  const handleSearchDescription = (e) => {
    setSearchDescription(e.currentTarget.value)
  }

  const images = useSelector(favImages)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findImageFav(searchDescription))
  }, [searchDescription])

  return (
    <Container maxWidth="2xl">
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 'xs',
          maxWidth: 'md',
          margin: 'auto',
          marginTop: 5,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: 'black' }}
          placeholder="Search images by description ..."
          onChange={handleSearchDescription}
        />
        <IconButton type="submit" sx={{ padding: '12px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <h1>{searchDescription}</h1>
      <ImageList
        sx={{ marginX: 2, marginTop: 6 }}
        variant="woven"
        cols={4}
        gap={12}
      >
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.thumb}`}
              srcSet={`${item.thumb}`}
              alt={`${item.alt_description}`}
              loading="lazy"
            />
            <ImageListItemBar
              position="top"
              title={item.description}
              actionIcon={
                <div>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about `}
                  >
                    <FileDownloadSharpIcon
                      sx={{ color: 'white' }}
                      aria-label={`star `}
                    />
                  </IconButton>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about `}
                  >
                    <EditIcon sx={{ color: 'white' }} aria-label={`star `} />
                  </IconButton>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about `}
                  >
                    <DeleteOutlineSharpIcon
                      sx={{ color: 'white' }}
                      aria-label={`star `}
                    />
                  </IconButton>
                </div>
              }
              actionPosition="right"
            />

            <ImageListItemBar
              position="bottom"
              subtitle={
                <div>
                  <h3>Width : {item.width}px</h3>
                  <h3>Height : {item.height} px</h3> <h3> Date: {item.date}</h3>
                </div>
              }
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.description}`}
                >
                  <FavoriteIcon color="error" />
                  <h4>{item.likes}</h4>
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
