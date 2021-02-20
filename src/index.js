import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './Test';
import Addfolder from './pages/AddFolder';
import Addnote from './pages/AddNote';
import FolderContextProvider from './context/FoldersContext';
import NoteView from './components/NoteView';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <FolderContextProvider>
            <App/>
          </FolderContextProvider>
        </Route>
        <Route path="/addFolder" render={(props) => <FolderContextProvider><Addfolder {...props}/></FolderContextProvider>} />
        <Route path="/addNote" render={(props) => <FolderContextProvider><Addnote {...props}/></FolderContextProvider>} />
        <Route exact path="/noteview/:id" render={(props)=>  <FolderContextProvider><NoteView {...props} /></FolderContextProvider>} />
        <Route path="/folderview/:id" render={(props)=>  <FolderContextProvider><App {...props} /></FolderContextProvider>} />
        <Route path="/test">
          <Test></Test>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
