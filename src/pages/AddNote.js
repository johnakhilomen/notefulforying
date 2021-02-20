import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FolderContext } from '../context/FoldersContext';
class Addnote extends Component {
   
    render() { 
        return ( 
            <FolderContext.Consumer>
                { (ctx) => 
                {
                    const {addNote, handleInput, notes, folders} = ctx;
                    return (
                        <div>
                        <Header></Header>
                        <button onClick={()=> this.props.history.goBack()
                        }>Back</button>
                        <div>
                        <h2>Create a note</h2>
                        <form onSubmit={(e) => addNote(e) }>
                            <label htmlFor="notename">Name </label>
                            <br/>
                            <input type="text" id="notename" name="notename" onChange={handleInput}></input>
                            <br/>
                            <label htmlFor="content">Content </label>
                            <br/>
                            <input type="text" id="content" name="content" onChange={handleInput}></input>
                            <br/>
                            <label htmlFor="folderSelected">Forder</label>
                            <select name="folderSelected" id="folderSelected" onChange={handleInput}>
                                <option value="default">...</option>
                                {
                                    folders.map(folder=> {
                                        return (
                                            <option key={folder.id} value={folder.name}>{folder.name}</option>
                                        )
                                    })
                                }
                            </select>
                        
                            <br/>
                            <button type="submit">Add note</button>
                        </form>
                        </div>
                        <ul>
                            { 
                             notes.map(item => <li key={item.id}> {JSON.stringify(item)} <p>................</p></li>)
                            }
                        </ul>
                               
                         <Footer></Footer>
                      </div>
                     
                    )
                }

                }
                
            </FolderContext.Consumer>
           );
    }
}
 
export default Addnote;