import React, { Component } from 'react';
import Folders from './Folders';
import Notes from './Notes';
import PropTypes from 'prop-types';
import HandleError from "./ErrorBoundary";

class Main extends Component {
    constructor(props)
    {
        super(props);
    }

    state = {  }
    render() {
        try {
            //throw Error("error!");
            const {folders, notes} = this.props.mainProp;
            if(!this.props.mainProp)
            {
                console.log("Crashed!")
                throw new Error("Crashed!")
            }
            let selectedNotes = (id) => {
                let n =  notes.filter(item=> item.folderId == id);
                // console.log(n);
                return n;
            }
            //Root path "/"
            if(this.props.otherProps.match == undefined)
            {
              return(
                    <div className="main">
                        <Folders foldersProp = {folders}></Folders>
                        <Notes notesProp={notes}></Notes>
                    </div>
                 );
            }
            // console.log(this.props)
            const {id} =this.props.otherProps.match.params;
            let notesSelected= selectedNotes(id);
                {
                    if(notesSelected.length > 0)
                    {
                        return (
                            <div className="main">
                                <Folders foldersProp = {folders}></Folders>
                                <Notes notesProp={notesSelected}></Notes>
                            </div>
                         );
                    }
                    else{
                        return (
                            <div className="main">
                            <Folders foldersProp = {folders}></Folders>
                            <p>No notes found!</p>
                            </div>
                         );
                   
                    }
                }
           
          } 
          catch (error) 
          {
            //return <HandleError error={error} />
            console.log(error)
           return <div>
               <h2>I crashed</h2>
               <br></br>
               {error.message}
               </div>
          }

        }
}
 
Main.propTypes = {
    folders: PropTypes.array.isRequired,
    notes: PropTypes.array.isRequired
  };

export default Main;