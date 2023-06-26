import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Terms from './sections/Terms'
import PageNotFound from './sections/PageNotFound'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
    <HashRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
