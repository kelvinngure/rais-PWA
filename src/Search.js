import React, {useState} from "react"
import "./App.css"

const Updater = async(e) => {
    // handle updating the dropdown options
    // handle enter key
    if (e.key === "Enter"){
        console.log("enter")
    }
    else{  
        const searchTerm = e.target.value
        console.log(searchTerm)
    }
    // const url = `https://restcountries.eu/rest/v2/name/${searchTerm}`

    // const response = await fetch(url)
    // const jsoned = await response.json()
    // console.log(jsoned)
}


const Sender = (e) => {

}


const Search = () => {

    const [search, setSearch] = useState("search for a country...")

    return(
        <div className = "Search">
            <p> Explore </p>
            <input id = "countrySearch" value = {search} className = "searchBox" onKeyDown = {Updater}/>
        </div>
    )
}

export default Search