import {
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../src/templates/Default'



const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 5),

  },


  cardMedia: {
    
    paddingTop: '56%',
    
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
      
        <Typography component="h4" variant="h5" align="center" className={classes.snap}  >
          Encontre suas melhores imagens 
        </Typography>
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

      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card >
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?criança' }
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?praia'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?passaros'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?comida'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?beleza'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?mar'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?sol'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?frio'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/800x600/?montanhas'}
              title="Titulo da imagem"
            />
            </Card>
          </Grid> 
        </Grid>      
      </Container>
      
     
      
      
    </TemplateDefault>
  )
}
