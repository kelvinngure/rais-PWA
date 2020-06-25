import React from "react"
import "./App.css"
import countryContext from "./Context"

const Card = (props) => {
    return(
        <countryContext.Consumer>
            {state => state.state.country ? // state.state.country
                <div className = "Card">
                    <p className= "Country">country: {state.state.country.name}</p>
                    <p className= "Country">capital: {state.state.country.capital}</p>
                    <p className= "Country">population: {state.state.country.population}</p>
                    <p className= "Country">region: {state.state.country.region}</p>
                </div> :
                <p>explore</p>

            }
            
        </countryContext.Consumer>
    )
}

export default Card

// president 
// capital
// land area
// population
// google map location {future plan, and maybe on the side of the card}