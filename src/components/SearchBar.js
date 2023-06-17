import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  area: {
   marginLeft: '100px',
  }
}))



export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 100 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon  />
      </IconButton>
      <InputBase 
        sx={{ ml: 4, flex: 1 }}
        placeholder="Ex. carros"
        inputProps={{ 'aria-label': 'Ex. carros' }}
        
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 20, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        
      </IconButton>
    </Paper>
  );
}