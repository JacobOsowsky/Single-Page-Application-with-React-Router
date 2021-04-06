import React from 'react';
import {Link} from 'react-router-dom';

const tools = ['kalkulator', 'przelicznik', 'zadania']


const ToolsListPage = () => {
    const toolsList = tools.map(tool=>(
        <li key={tool}>
            <Link to={`/tool/${tool}`}>{tool}</Link>
            </li>
    ))
    return (
            <ul>{toolsList}</ul>
     );
}
 
export default ToolsListPage;