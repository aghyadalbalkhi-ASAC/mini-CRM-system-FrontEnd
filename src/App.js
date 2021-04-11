// App Component is Responsbel of rendering the Main Components for This Projects
// The Main Components Responsbel of rendering a specific tasks or handel another component too .


import React,{ Component } from 'react';
import Main from './components/MainComponent/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {


  render(){
  return (
    <>
    <BrowserRouter>
          <div className="App">
            <Main />
          </div>
    </BrowserRouter>
    </>
  );
}
}

export default App;