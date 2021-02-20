import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FolderContext } from '../context/FoldersContext';

class Addfolder extends Component {

    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <FolderContext.Consumer>
                {
                    (ctx)=>{
                        const {addFolder, handleInput, folders} = ctx;
                        return(
                            <div>
                <Header></Header>
                <button onClick={()=>this.props.history.goBack()}>Back</button> 
             

                <div>
                <h2>Create a folder</h2>
                <form onSubmit={(e) => addFolder(e)}>
                    <label htmlFor="name">Name </label>
                    <br/>
                    <input type="text" id="name" name="name" onChange={handleInput}></input>
                    <br/>
                    <button type="submit">Add folder</button>
                </form>
                </div>
              
                 <Footer></Footer>
              </div>
    
                        )

                    }
                   
                }
            </FolderContext.Consumer>
            
         );
    }
}
 
export default Addfolder;