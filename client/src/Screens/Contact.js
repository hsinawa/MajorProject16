import React from 'react'
import { FormHelperText, Input, InputLabel, TextField } from '@material-ui/core'
import { FormControl } from '@mui/base'



const Contact = () => {
    return(
        <div style={{backgroundColor:'white', textAlign:'center'}}>
<h1> Update Your Details Here </h1>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" label="Outlined" variant="outlined"/>
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>

<TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
        </div>
    )
}

export default Contact