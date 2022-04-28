import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {

    return (

        <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 'xs',
          maxWidth: 'md',
          margin: 'auto',
        }}
      >

       <IconButton type="submit" sx={{ padding: '12px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>


    )

}

export default Search