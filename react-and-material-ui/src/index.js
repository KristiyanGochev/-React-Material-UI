import React from 'react';
import {render} from 'react-dom';
import Hellow from "./Hellow"

const App = () => (
<div>
    <Hellow name="Kristiyan"/>
    <h2>Yes, start edit from here {'\u2728'}</h2>
</div>
);

render(<App />, document.getElementById('root'));
