import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import SearchPage from "./pages/search.page";
import BooksPage from './pages/books.page';

import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/">
              <BooksPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
