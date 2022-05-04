import { Container, IconButton, InputBase, Paper } from '@mui/material'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search'
import { ImageList } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ImageListItemBar } from '@mui/material'
import { ImageListItem } from '@mui/material'
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {
  deleteImage,
  dowloadImage,
  favImages,
} from '../sliderImage/sliderImageSlice'
import { useState } from 'react'
import ModalEdit from '../../components/modal/ModalEdit'
import { margin, padding } from '@mui/system';
import { useSort } from '../../customHook/useSort';

export default function SliderMyPhotos() {
  const [searchDescription, setSearchDescription] = useState('')

  const handleSearchDescription = (e) => {
    setSearchDescription(e.currentTarget.value)
  }

  const dispath = useDispatch()
  const images = useSelector(favImages)

  const handleDeleteImage = (idBuscar) => {
    dispath(deleteImage(idBuscar))
  }

  const handleDowloadImage = (urlImage, nameImage) => {
    const obj = { url: urlImage, name: nameImage }
    dispath(dowloadImage(obj))
  }

  //Metdo filtra las fotos segun la descripcion siempre y cuando haya una descripcion con mas de un caracter , me las filtra en minusculas
  const filteredPhotos = searchDescription.length
    ? images.filter((img) =>
        JSON.stringify(img.description)
          .toLocaleLowerCase()
          .includes(searchDescription.toLocaleLowerCase()),
      )
    : images

    const [typeSort, setTypeSort] = useState('');

    const [list, setList, sort] =useSort(filteredPhotos,typeSort)

    const handleChangeSort = (event) => {
      setTypeSort(event.target.value);
      
      let newSortedList = sort(event.target.value)
          if (newSortedList[0] === list[0]) newSortedList = sort(event.target.value, true)
          setList(newSortedList)
          console.log(list)
    };


   
    
  return (
    <Container maxWidth="xl">
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 'xs',
          maxWidth: 'md',
          margin:'auto',
          
        }}
       
       
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: 'black' }}
          placeholder="Search images by description ..."
          value={searchDescription}
          onChange={handleSearchDescription}
        />
        <IconButton type="submit" sx={{ padding: '12px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{ minWidth: 120,width:60,marginTop:4,position:'fixed' , right:0 ,marginRight:3}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeSort}
          label="Age"
          onChange={handleChangeSort}
        >
          <MenuItem value={"width"}>Width</MenuItem>
          <MenuItem value={"height"}>Height</MenuItem>
          <MenuItem value={"likes"}>Likes</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <ImageList
        sx={{ marginX: 2, marginTop: 6 }}
        variant="woven"
        cols={4}
        gap={12}
        
      >
        {list.map((item) => (
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
                <>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about `}
                    onClick={() =>
                      handleDowloadImage(
                        item.full,
                        item.description == null
                          ? 'image'
                          : item.description.toLocaleLowerCase(),
                      )
                    }
                  >
                    <FileDownloadSharpIcon
                      sx={{ color: 'white' }}
                      aria-label={`star `}
                    />
                  </IconButton>

                    
                   <ModalEdit item={item} />
                
                    
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about `}
                    onClick={() => handleDeleteImage(item.id)}
                  >
                    <DeleteOutlineSharpIcon
                      sx={{ color: 'white' }}
                      aria-label={`star `}
                    />
                  </IconButton>
                </>
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
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
