import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Skills from './pages/Skills'
import Curriculum from './pages/Curriculum'
import Works from './pages/Works'
import Contact from './pages/Contact'

import Work from './components/Work'

import './styles/global.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          
          <Route path='/about' element={<About />} />
          
          <Route path='/skills' element={<Skills />} />
          
          <Route path='/curriculum' element={<Curriculum />} />
          
          <Route path='/works' element={<Works />}>
            <Route path=':id' element={<Work />} />
          </Route>
          
          <Route path='/contact' element={<Contact />} />
          
          <Route path='*' element={<NotFound />} />
        
        </Routes>


      </BrowserRouter>

    </QueryClientProvider>

  </React.StrictMode>,
)
