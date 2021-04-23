import React from 'react';
import Home from './Pages/Home/index.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from './theme'
import Signin from './Pages/Home/Signin';
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './Pages/Home/Catalogo';
import HomeFuncionario from './Pages/Home/HomeFuncionario/index.js';

function App() {

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='//*' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/home' element={<HomeFuncionario />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </Provider>

  );
}

export default App;
