import './App.css';
import React from 'react';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import bookList from './data/fantasy.json'


function App() {
    const book = bookList[0]
    
    return (
        <div className="App">

            <WarningSign textAlert="Danger!! Danger Enemies at the gates!!!!!!!"/>
            <MyBadge text="This is the badge text"  color="#4c8f85" />
            <SingleBook book={ book }/>
            
        </div>
    );
}



export default App;
