import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { IconButton, InputBase } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editDescription } from '../../features/sliderImage/sliderImageSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}


const ModalEdit = (props) => {

  const dispatch=useDispatch();
  const [wordEdit, setWordEdit] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleEdit=(e)=>{
    setWordEdit(e.currentTarget.value)
    const objEdit={id:props.item.id,newDescription:wordEdit}
    dispatch(editDescription(objEdit))
  }
  

  

  return (
    <>
      <IconButton
        sx={{ color: 'white' }}
        aria-label={`info about `}
        onClick={handleOpen}
      >
        <EditIcon sx={{ color: 'white' }} aria-label={`star `} />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit description
            </Typography>
            {/* <TextField
              id="standard-basic"
              label="New Description"
              variant="standard"
              size='medium'
              value={wordEdit}
              
            /> */}
            <InputBase
              sx={{ ml: 2, flex: 1, color: 'black' }}
              placeholder="Search things ..."
              onChange={handleEdit}
              value={wordEdit}
            >
            
            </InputBase>
            <Stack direction="row" spacing={12} marginTop={3} >
              <Button variant="outlined"  startIcon={<CloseIcon  />} color="error" >
                Exit
              </Button>
              <Button variant="contained" onClick={handleEdit} endIcon={<DoneIcon  />}>
                Edit
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ModalEdit
