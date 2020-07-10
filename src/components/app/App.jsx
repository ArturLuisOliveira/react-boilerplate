import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <>
            <h1>React Boilerplate</h1>
        </>
    );
}

export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
