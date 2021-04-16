import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ToolsListPage.css'

const tools = [
    {
        name: 'kalkulator',
        description: 'Narzędzie wykonujące podstawowe działania matematyczne'

    },
    { 
        name: 'przelicznik',
        description: 'Aplikacja przeliczająca ceny przykładowych produktów na popularne waluty. Aktualne kursy walut pozyskiwane przy użyciu metody fetch(), za pomocą API udostępnionego przez Narodowy Bank Polski'
    }
]


const ToolsListPage = () => {
    const toolsList = tools.map(tool=>(
        <div className='tool' key={tool.name}>
            <Link to={`/tools/${tool.name}`}>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
            </Link>
        </div>
    ))
    return (
            <div className='tools'>
                {toolsList}
                <div className='tool'>
                    <a href='https://jacobosowsky.github.io/ToDo/'>
                        <h4>Lista zadań</h4>
                        <p>Projekt umożliwiający tworzenie listy zadań o różnych atrybutach (priorytet, termin wykonania)</p>
                    </a>
                </div>
            </div>
     );
}
 
export default ToolsListPage;