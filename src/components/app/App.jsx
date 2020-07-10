import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from 'antd';

import './styles.less';

function App() {
    return (
        <>
            <Typography className="blue">React Boilerplate</Typography>
        </>
    );
}

export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
