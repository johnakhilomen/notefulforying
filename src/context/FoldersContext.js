import React, { Component, createContext } from 'react';
import conf from "../config";
import {v4 as uuidv4} from 'uuid'
import {ErrorBoundary} from 'react-error-boundary'

export const FolderContext = createContext();

class FolderContextProvider extends Component {
    state = { 
        folders:[],
        notes:[],
        notename: "",
        content: "",
        folderSelected: "",
        name: ""
     }

     fetchCall = (api) => {
         try
         {
            return fetch(api);
         }
         catch(err)
        {
          console.error(err);
          return err.message;
        }
    }

 
     async componentWillMount() {
        try{
                let notes = await (await this.fetchCall(conf.noteapi)).json();
                let folders = await (await this.fetchCall(conf.folderapi)).json();
                if(!notes)
                {
                    throw new Error("Crashed!");
                }
                this.setState({
                  notes:notes,
                  folders: folders
                });
        }
        catch(err)
        {
          console.error(err);
          return err.message;
        }
    
    } 

    getId = () => {
        if(!this.state.folderSelected)
        {
            console.error("No selected folder!")
        }
        let res = this.state.folders.find(it=> it.name == this.state.folderSelected);
        if(!res)
        {
            alert("Please select a folder to add note to");
            return false;
        }
        return res.id;
     }
    handleInput = (e) => {
        const{name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
   
    addNote = async (e) => {
        e.preventDefault();
        if(!this.getId())
        {
            return false;
        }
        let notesLocal = this.state.notes;
        
        if(this.getId()){
            notesLocal.push(
                {
                    "id": this.getId(),
                    "name":this.state.notename,
                    "modified": new Date(),
                    "content": this.state.content
    
                }
            );
            this.setState({
                notes: notesLocal
            });
        }
        // }
        // window.location.reload();
        // alert("Note Added!");
        // window.history.back();
   
    };



    addFolder = async (e) => {
        e.preventDefault();
        let foldersLocal = this.state.folders;
        foldersLocal.push({
            id:uuidv4(),
            name: this.state.name
        });
        console.log(foldersLocal[foldersLocal.length - 1].id);
        this.setState({
            folders: foldersLocal
        })
        console.log(this.state.folders)
        alert("Folder Added!");
    }

    removeNote = (id) =>
    {
       let newNotes =  this.state.notes.filter(note=> note.id !== id);
       this.setState({
           notes: newNotes
       });
    }
  
    selectedNote = (id) => this.state.notes.filter(n => n.id === id);

    render() { 
        return (
            <ErrorBoundary>
            <FolderContext.Provider value={{...this.state, handleInput: this.handleInput, 
            addNote: this.addNote, addFolder: this.addFolder, removeNote: this.removeNote,
            selectedNote: this.selectedNote
            }}>
                {this.props.children}
            </FolderContext.Provider>
            </ErrorBoundary>
          );
    }
}
 
export default FolderContextProvider;