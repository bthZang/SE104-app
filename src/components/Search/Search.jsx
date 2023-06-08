import { useState } from "react"
import "./Search.scss"

import searchBtn from "../../assets/images/search.png"
import searchImg from "../../assets/images/search.svg"

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(`Search for: ${searchTerm}`);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };
    return (
        <div className="border">
            <button onClick={handleSearch} className="searchBtn">
                <img src={searchImg} className="searchImg" /></button>

            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} type="text" placeholder="Search ..." className="textInput"></input>
        </div>
    );

}

export default Search;