import { useState } from "react"
import "./Search.scss"

import CLOSE_ICON from "../../assets/close.svg"
import searchImg from "../../assets/images/search.svg"
import { useRef } from "react"

const Search = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const inputRef = useRef()

    const handleSearch = (searchTerm) => {
        onSearch(searchTerm.toLowerCase())
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(searchTerm);
        }
    };

    return (
        <div className="border">
            <button onClick={() => handleSearch(searchTerm)} className="searchBtn">
                <img src={searchImg} className="searchImg" />
            </button>

            <input ref={inputRef} value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
                if (e.target.value == '') handleSearch('')
            }} onKeyPress={handleKeyPress} type="text" placeholder="Search ..." className="textInput"></input>

            {
                searchTerm ? <button onClick={() => {
                    setSearchTerm('')
                    handleSearch('')
                }} className="searchBtn">
                    <img src={CLOSE_ICON} className="searchImg" />
                </button> : null
            }

        </div>
    );

}

export default Search;