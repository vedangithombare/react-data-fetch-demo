import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
check if the page number is displayed correctly
check if 20 elements are present
check if the forward and backward buttons are working 
like the onclick is working
on last page check if the forward button stops working like it doesnt goes over limit
on first page check if the backword button is working


*/ 