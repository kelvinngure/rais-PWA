import React, {useReducer} from 'react';
import './App.css';
import Main from "./Main"
import countryContext from "./Context"

const country = {}

const reducer = (state, action) => {
  switch (action.type){
    case "display":
      return{
        ...state,
        country: action.payload
      }
    default: 
      return{
        ...state
      }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, country)

  return (
    <div className="App">
      <header className="App-header">
        <countryContext.Provider value = {{state, dispatch}} >
          <Main />
        </countryContext.Provider>
      </header>
    </div>
  );
}

export default App;
