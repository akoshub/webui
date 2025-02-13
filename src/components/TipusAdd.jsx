import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TipusAdd()
{
    function Post(ujTipus)
    {
        let kepek= ujTipus.get("tipus-kepek")
        let megnevezes= ujTipus.get("tipus-megnevezes")
        let leiras= ujTipus.get("tipus-leiras")
        let tipus= {kepek:kepek, id:0, megnevezes:megnevezes, leiras:leiras}
        axios.post("https://localhost:5001/api/UjTipusok", tipus)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <div>
            <form action={Post}>
                <input type="text" name='tipus-kepek'/>
                <input type="text" name='tipus-megnevezes'/>
                <input type="text" name='tipus-leiras'/>
                <button type='submit'>hozzaadd</button>
            </form>
        </div>
    );
}

export default TipusAdd;