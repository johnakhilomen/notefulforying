import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer"
import {FolderContext} from "./context/FoldersContext";
import "./App.css";
import HandleError from "./components/ErrorBoundary";
import {ErrorBoundary} from 'react-error-boundary'

class App extends Component {

  render() {
    try {
      return ( 
        <FolderContext.Consumer>
            { (ctx) => 
            {
                const {notes, folders} = ctx;
                const propObj = {
                  notes: notes,
                  folders: folders
                };
                return (
                   
                    <div className="app">
                    <Header></Header>
                    <ErrorBoundary>
                    <Main mainProp={propObj} otherProps={this.props}></Main>
                    </ErrorBoundary>
                    <Footer></Footer>
                    </div>
                   
              )
            }
          }
        </FolderContext.Consumer>
       );
 
    } catch (error) {
      //return <HandleError error={error} />
      return <p>I crashed</p>;
    }
     }
}
 
export default App;


