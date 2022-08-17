import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import './index.css'
import { All, Images, News, Videos } from './pages';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<All />} />
        <Route path='images' element={<Images />} />
        <Route path='videos' element={<Videos />} />
        <Route path='news' element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
)