import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {FolderContext} from "../context/FoldersContext";

class NoteView extends Component {

  render() {
      
    return ( 
        
      <FolderContext.Consumer>
          { (ctx) => 
          {
            console.log(this.props);
              const {notes, folders, selectedNote} = ctx;
              //console.log(notes);
              //console.log(this.props.match.params.id);
              //const selectedNote = notes.filter(n => n.id === this.props.match.params.id);
             const note = selectedNote(this.props.match.params.id);
             if(note[0])
             {
                console.log(note[0]);
                return(
                    <div className="noteView">
                    <Header></Header>
                    <button onClick={()=>this.props.history.goBack()}>Back</button> 
                    <p>{note[0].id}</p>  
                    <p>{note[0].name}</p>  
                    <p>{note[0].content}</p>  
                    <p>{note[0].modified}</p>                   
                    <Footer></Footer>
                </div>
                )
               
             }
           else{
            return (
                <div className="noteView">
                  <Header></Header>
                  <button onClick={()=>this.props.history.goBack()}>Back</button> 
                  <p>No content</p>
                  <Footer></Footer>
              </div>
                )
           }
              
          }
        }
      </FolderContext.Consumer>
     );
  }
}
 
export default NoteView;