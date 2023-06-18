import {
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../src/templates/Default'
import SearchBar from '../src/components/SearchBar'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),

  },

  cardMedia: {
    paddingTop: '56%',
    margin: '0',
  },

  buttonAdd: {
    width: '100px',
    margin: '30px 25px',
    
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Container maxWidth= "sm" className={classes.container}>
      
        <Typography component="h1" variant="h2" align="center" className={classes.snap}>
          SnapShot
        </Typography>
        <img src='../images/snap.png'></img>
        <SearchBar/>
        <Button variant="contained" color="primary"align="center" className={classes.buttonAdd}> 
          Montanhas
        </Button>
        <Button variant="contained" color="primary" align="center" className={classes.buttonAdd}> 
          Praias
        </Button>
        <Button variant="contained" color="primary" align="center" className={classes.buttonAdd}> 
          Passáros
        </Button>
        <Button variant="contained" color="primary" align="center" className={classes.buttonAdd}> 
          Comida
        </Button>
      </Container>

      <Container maxWidth="md" >
        <Grid container spacing={4} >
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>
        </Grid>
        
      </Container>
      
    </TemplateDefault>
  )
}