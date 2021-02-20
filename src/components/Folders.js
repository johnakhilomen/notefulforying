import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Folders extends Component {
    constructor(props)
    {
        super(props);
    }
    render() { 
        return (
            <div className="sidebar">
                <ul className="foldersList">
                    {
                        this.props.foldersProp.map(item=>{
                            const {id,name} = item;
                            return(
                                <li key={id}>
                                    <NavLink to={`/folderview/${id}`}>
                                    {name}
                                    </NavLink>
                                </li>
                            )
                        }

                        )
                    }
                </ul>
            <div className="roundButton"><NavLink to="/addFolder" >Add Folder</NavLink></div>
            </div>
          );
    }
}

Folders.propTypes = {
    foldersProp:PropTypes.array.isRequired
  };

export default Folders;