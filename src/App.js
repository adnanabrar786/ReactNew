import './App.css';
import './component/G'
import Home from './component/Home';
import Practice from './component/Practice';
import Router from './router/Router';
import React from 'react';
import UseReducerTwo from './component/useReducer/UseReducerTwo';
import UseReducerThree from './component/useReducer/UseReducerThree';
import UseReducerOne from './component/useReducer/UseReducerOne';
import FetchdataUseState from './component/useReducer/FetchdataUseState';
import FetchDataUseReducer from './component/useReducer/FetchDataUseReducer';
import UseEffectMy from './component/UseEffectMy';


function App() {


  return (
    <div className="App">

      <UseEffectMy/>
      {/* {global.adnanName} */}

      {/* <Router /> */}

{/* <UseReducerTwo/> */}
{/* <UseReducerOne/> */}
{/* <UseReducerThree/> */}
{/* <FetchdataUseState/> */}

{/* <Home/> */}


    </div>
  );
}

export default App;
