import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as spotActions from '../../store/spot'
import search from './search.png'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const spots = useSelector(state=> Object.values(state.spot.allSpots))

    useEffect(()=> {
        dispatch(spotActions.fetchSpots())
    }, [])

    const handleFilter = (e) => {

    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };


    return(
<div>
        <div className='search-wrapper'>
         <div>
            <input
            name='search'
            type='text'
            placeholder='Search'
            className='searchInputs'
            value={wordEntered}
            onChange={handleFilter}
            />
        </div>
        {/* <div className='search-button'> */}
            <img id='search-icon' src={search}></img>
        {/* </div> */}
        </div>
        <div className='searchall'>
            {filteredData.length !== 0 && (
                <div className='data-result'>
                    {filteredData.map((value)=>{
                        return <div className='res-row'>
                                <NavLink className='data-item'
                                key={value.id}
                                to={`videos/${value.id}`}
                                onClick={clearInput}
                                >
                                    <div id='sb-space'></div>
                         <img id='search-res-pic' src={search}></img>
                         <p id='search-res-text'>{value.title}</p>
                        </NavLink>
                            </div>
                    })
                    }
                </div>
            )}
        </div>
        </div>
    )
}


export default SearchBar
