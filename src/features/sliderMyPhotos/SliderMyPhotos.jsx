import { Container, IconButton, InputBase, Paper } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import { ImageList } from '@mui/material'
import { useSelector } from 'react-redux'
import { ImageListItemBar } from '@mui/material'
import { ImageListItem } from '@mui/material'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'




export default function SliderMyPhotos() {

// const dispatch = useDispatch()
const  myImages= useSelector((state) => state.myImages)


  return (
    <Container maxWidth="2xl">
       <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 'xs',
          maxWidth: 'md',
          margin: 'auto',
          marginTop:5
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: 'black' }}
          placeholder="Search images by description ..."

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
           {console.log(myImages)}
         {myImages && myImages.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.urls.thumb}`}
              srcSet={`${item.urls.thumb}`}
              alt={`${item.alt_description}`}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              key={item.id}
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
