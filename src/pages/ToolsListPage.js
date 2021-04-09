import React from 'react';
import {Link} from 'react-router-dom';

const tools = ['kalkulator', 'przelicznik']


const ToolsListPage = () => {
    const toolsList = tools.map(tool=>(
        <li key={tool}>
            <Link to={`/tool/${tool}`}>{tool}</Link>
            </li>
    ))
    return (
        <>
            <ul>{toolsList}</ul>
            <a href='https://jacobosowsky.github.io/ToDo/'>Zadania</a>
        </>
     );
}
 
export default ToolsListPage;