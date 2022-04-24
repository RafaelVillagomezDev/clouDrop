import { Button, Container } from '@mui/material'



import React,{ useState } from 'react'



const SliderTags = () => {
  const tags = ['Colors', 'Wallpapers', 'Experimental', 'Films','Flowers','Cars','Movies','SkateBoard','Games','birthday','Architecture','Fashion']
  
  const [tagName,setTag]=useState("")

  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: 2 }}>
        {tags.map((tag) => (
          <Button
            variant="outlined"
            key={tag}
            onClick={(e)=>{   setTag(e.currentTarget.value) }}
            sx={{
              textAlign: 'left',
              marginRight: 2,
              marginBottom:1,
              borderRadius:200,
              color:"black",
              fontSize:12,
              display:{xs:'none', md:'inline-block'}
            }}
          
            value={tag}
            label={`#${tag}`}
          >{`#${tag}`}</Button>
        ))}
        
      </Container>
      
      <h1>{tagName}</h1>
      
    </div>
  )
}

export default SliderTags
