import React from 'react';
import logo from './logo.svg';
import HookCounter from './components/useState';
import UseprevState from './components/useprevState';
import UseStateObject  from './components/useStateObject';
import UseStateArray from './components/useStateArray';
import UseEffect from './components/useEffect';
import UseEffectApi from './components/useEffectApi';
import Pagination from './components/pagination';
import UseEffectMouse from './components/useEffectMouse';
import DataFetching from './components/useEffectApi2';
import MyCarousel from './components/carousel';
import ChatBox from './components/ChatBox';
import Chat from './components/ChatBox2';
import CheckboxSelectAll from './components/checkboxSelectAll';
import CheckboxContainer from './components/checkBoxContainer';
import CheckList from './multipleChecboxes/checkList';
import Register from './components2/PostData';

import './App.css';
import Routing from './components2/routing';

function App() {
  return (
    <div className="App">
     <HookCounter />
     <UseprevState />
     <UseStateObject />
     <UseStateArray /> 
     <UseEffect />
     <UseEffectApi />
     <Pagination />
     <UseEffectMouse />
     
     <MyCarousel />
     <Chat />
     <ChatBox />
   
 <CheckboxSelectAll />
 <CheckboxContainer />
 <CheckList />
 {/* <Routing /> */}

    </div>
  );
}

export default App;
