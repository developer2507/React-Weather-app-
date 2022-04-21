import React, { useState } from 'react'
import '../styles/Search.css'

function Search() {

    const [search, setSearch] = useState('')

    const SearchHandler = (e) =>{
        setSearch(e.target.value)
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="search-center">
            <div className="search">
                <form onSubmit={SubmitHandler}>
                    <input className="city" placeholder="City" onChange={SearchHandler} type="text" />
                    <input className="submit" type="submit" value="Sub" />
                </form>
            </div>
        </div>
    )
}

export default Search
