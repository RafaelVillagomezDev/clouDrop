import { Container } from '@mui/material'
import { Button } from '@mui/material'
import Chip from '@mui/material/Chip'


const SliderTags = () => {
  const pages = ['Colors', 'Wallpapers', 'Experimental','Films','People']

  const handleOpenTag = (event) => {
    console.log(event)
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{marginTop:2}}>
        {pages.map((page) => (
            <Chip label={`#${page}`} sx={{marginRight:2 , marginBottom:1}}>
              <Button
                key={page}
                onClick={handleOpenTag}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  textAlign: 'left',
                }}
              >
                
              </Button>
            </Chip>
        
        ))}
      </Container>
    </div>
  )
}

export default SliderTags
