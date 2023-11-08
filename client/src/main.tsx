import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  createBrowserRouter,  RouterProvider,  Route } from "react-router-dom";
import DeckO from './Deck.tsx';
import { Header } from './Header.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/decks/:deckId",
    element: <DeckO/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="page">
      <Header/>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
