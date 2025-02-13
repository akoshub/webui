import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TipusList()
{
    const [tipusok, setTipus] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:5001/api/Tipusok`)
        .then(res => setTipus(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        console.log(tipusok),
        <div>
            <h2>Tipusok</h2>
            <div>
                {tipusok?.map(tipus =>(
                    <div key={tipus.id}>
                        <img src={tipus.kepURL} alt={tipus.name}/>
                        <div>
                            <h3>{tipus.name}</h3>
                            <p>{tipus.megnevezes}</p>
                            <Link to={{pathname:`/Tipus/${tipus.id}`, state:{id:tipus.id}}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>Részletek</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TipusList;