import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TipusDetails()
{
    var { id } = useParams();
    const [tipus, setTipus] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:5001/api/Tipusok/${id}`)
        .then(res => setTipus(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2>Tipusok</h2>
            <div>
                    <div key={tipus.id}>
                        <img src={tipus.kepek}/>
                        <div>
                            <h3>{tipus.megnevezes}</h3>
                            <p>{tipus.leiras}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default TipusDetails;