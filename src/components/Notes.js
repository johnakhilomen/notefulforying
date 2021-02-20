import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FolderContext } from '../context/FoldersContext';

class Notes extends Component {
    constructor(props)
    {
        super(props);
    }
  
    render() { 
        console.log(this.props);
        return(
        <FolderContext.Consumer>
            {

                (ctx)=> {
                    const {removeNote} = ctx;
                    return (
                        <div className="notes">
                            <ul className="notesList">
                                {
                                    this.props.notesProp.map(n => {
                                        const{id,content, folderId, name, modified } = n;
                                        return ( 
                                        <li key={id}> 
                                            <NavLink to={`/noteview/${id}`}>
                                                <h3>{name}</h3>
                                            </NavLink>                   
                                            
                                            <p>{modified}</p>
                                            <button onClick={()=>removeNote(id)}>remove</button>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="roundButton"><NavLink to="/addNote" >Add Note</NavLink></div>
                        </div>
                       
                      );
                }
            }
        </FolderContext.Consumer>
        )
       }
}
 
export default Notes;