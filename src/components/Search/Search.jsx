
import "./Search.scss"

import searchBtn from "../../assets/images/search.png"
import searchImg from "../../assets/images/search.svg"

const Search = () => {
    return (
        <div className="border">
            <button className="searchBtn">
                <img src={searchImg} className="searchImg" /></button>

            <input type="text" placeholder="Search ..." className="textInput"></input>
        </div>
    );

}

export default Search;