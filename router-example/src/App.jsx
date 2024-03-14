import './App.css'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import router from './router/router';

import About from './pages/About';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <main>
      <h1>Välkommen</h1>
      <RouterProvider router={ router } />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/om' element={ <About /> } />
          <Route path='/projekt' element={ <Projects /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter> */}
    </main>
  )
}

export default App
