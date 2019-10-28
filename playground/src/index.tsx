import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {cloneElement, CloneElement} from 'react-clone-element';


ReactDOM.render(<div>
    { cloneElement(document.querySelector('#input_id'), {style: {color: 'red'}}) }
    <CloneElement element={document.querySelector('#input_id')} style={{color: 'blue'}}/>
</div>, document.querySelector('#react-root'));