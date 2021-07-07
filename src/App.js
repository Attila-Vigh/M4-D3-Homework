import './App.css';
import React from 'react';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import listOFBooks from './data/fantasy.json'


function App() {
    
    return (
        <div className="App">

            <WarningSign textAlert="Danger!! Danger Enemies at the gates!!!!!!!"/>
            <MyBadge text="This is the badge text"  color="#4c8f85" />
            <BookList listOFBooks={ listOFBooks }/>
            
        </div>
    );
}



export default App;
