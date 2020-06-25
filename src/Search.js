import React, {useState, useContext} from "react"
import "./App.css"
import countryContext from "./Context"


const Search = () => {
    
    const { dispatch } = useContext(countryContext)
    const [search, setSearch] = useState("search for a country...")

    const Updater = (e) => {
        setSearch(e.target.value)
        
    }
    
    
    const Sender = async(e) => {
        e.preventDefault();
        const url = `https://restcountries.eu/rest/v2/name/${search}`
        const response = await fetch(url)
        const jsoned = await response.json()
        //console.log(jsoned[0]) // put contingency for status 404
        const country = {
            "name": `${jsoned[0].name}`,
            "capital": `${jsoned[0].capital}`,
            "population": `${jsoned[0].population}`,
            "region": `${jsoned[0].region}`,
        }
        dispatch({type: "display", payload: country})

    }

    return(
        <div className = "Search">
            <p> Explore </p>

            <form  onSubmit = {(e) => Sender(e)}>
                <input id = "countrySearch" value = {search} onFocus={(e) => e.target.value = ""} 
                className = "searchBox" onChange = {(e) => Updater(e)}/>
            </form>
            
        </div>
    )
}

export default Search