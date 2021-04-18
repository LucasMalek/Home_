import React from 'react';
import './style.css';
import Header from './Components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { Box, Card, Container } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Baixo from './Components/Baixo';

const useStyle = makeStyles({

  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    padding: 30,
    marginTop: 60,
    justifyItems: 'center',
    display: 'flex',

  },
  toolbar: {
    minHeight: 65,
  },
  
  div_1: {
    width: '100%',
    height: '450px',
    position: 'relative',
    display: 'flex',
    backgroundColor: 'black',
    opacity: '80%',
    backgroundImage: 'url(/images/back2.jpg)',
    backgroundPosition: 'center',
  },
  div_2: {

    position: 'absolute',
    zIndex: 30,
  },
  div_3: {
    width: '100%',
    minHeight: 500,
    backgroundColor: 'white',
    backgroundImage: 'url(/images/back4.png)',
    backgroundPosition: 'center',
  },
  block: {
    backgroundColor: "white",
    width: "100%",
    marginRight: 30,
    minHeight: 300,
    borderRadius: '25px',
  },

})
function Home() {

  const classe = useStyle();
  return (
    <div className={classe.root}>
      <Header />
      <div className={classe.toolbar}></div>
      <main className={classe.main}>
        <div className={classe.div_1}></div>

        <Container maxWidth="lg" className={classe.div_2}>
          <Box display="flex">
            {/* <Navbar /> */}

            <Feed />

          </Box>
        </Container>
      </main>

      <div className={classe.div_3}>
        
        <Baixo />
        <Container className={classe.container}>
          <Card className={classe.block}>
            <CardHeader
              avatar={<Avatar src='/images/avatars/mulher1.jpg' style={{ width: '56px', height: '56px', opacity: '100%' }} />}
              title={<Typography variant="h6">Maria Clara Oliveira</Typography>}
              subheader={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption">Data: 25/03/2021</Typography>
                  <Typography variant="caption">Vila Velha/ES</Typography>
                </div>
              }
            >
            </CardHeader>

            <CardContent style={{ marginLeft: 15, marginRight: 10 }}>
              <Typography>
                Fui muito bem recebida! Tive acesso tanto às informações das propriedades do carro quanto aos regulamentos da locadora de forma super fácil pelo App.
              </Typography>
            </CardContent>

          </Card>

          <div className={classe.block}>
            <Card className={classe.block}>

              <CardHeader
                avatar={<Avatar src='/images/homem1.jpg' style={{ width: '56px', height: '56px', opacity: '100%' }} />}
                title={<Typography variant="h6">Carlos Henrique</Typography>}
                subheader={
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption">Data: 30/03/2021</Typography>
                    <Typography variant="caption">Rio de Janeiro/RJ</Typography>
                  </div>
                }
              >
              </CardHeader>

              <CardContent style={{ marginLeft: 15, marginRight: 10 }}>
                <Typography>
                  Atendimento de primeira e carros super modernos. Aguardo ansiosamente para poder utilar o serviço de novo!
                </Typography>
              </CardContent>

            </Card>
          </div>

          <div className={classe.block}>
            <Card className={classe.block}>
              <CardHeader
                avatar={<Avatar src='/images/mulher2.jpg' style={{ width: '56px', height: '56px', opacity: '100%' }} />}
                title={<Typography variant="h6">Cláudia Gomes</Typography>}
                subheader={
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption">Data: 27/03/2021</Typography>
                    <Typography variant="caption">Campinas/SP</Typography>
                  </div>
                }
              >
              </CardHeader>
              <CardContent style={{ marginLeft: 15, marginRight: 10 }}>
                <Typography>
                  Gostei muito da equipe de suporte que me deu total apoio online, e também da ótima hospitalidade do App.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );

}

export default Home;
