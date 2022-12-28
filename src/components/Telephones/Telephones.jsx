import React from "react";
import { useState } from "react";
import Used from "../Used/Used";
import classes from './Telephones.module.css'
import TelephonesItem from "./TelephonesItem";


function Telephones ({named, phone, date, setNamed, setPhone, setDate, title}) {




    const [tels, setTels] = useState([
        {title: 'tel1', id: 1, name: null},
        {title: 'tel2', id: 2, name: null},
        {title: 'tel2', id: 3, name: null},
        {title: 'tel3', id: 4, name: null},
        {title: 'tel3', id: 5, name: null},
        {title: 'tel3', id: 6, name: null},
        {title: 'tel3', id: 7, name: null},
        {title: 'tel3', id: 8, name: null},
        {title: 'tel3', id: 9, name: null},
        {title: 'tel4', id: 10, name: null}
      ])
      const [useds, setUseds] = useState([])
    
      const tr = (m) => {
        setUseds(useds.filter(t => t.id !== m.id))
        setTels([...tels, m])
    }

    const transfer = (mob) => {
        if(named && phone && date){
            const object = {
                title: mob.title,
                id: mob.id,
                name: named,
                date,
                phone
            }
        setTels(tels.filter(t => t.id !== mob.id))
        setUseds([...useds, object])
        // setNamed('')
        // setPhone('')
        // setDate('')
    } else
    alert("Для бронирования телефона нужно предоставить всю информацию")
    }

    

    return(
        <div className={classes.lists}>
            <h3>В наличии:</h3>
            <div className={classes.free}>
                {tels.map((tel) => (
                        <TelephonesItem title={"Телефоны в наличии"} tel={tel} transfer={transfer}/>
                    ))}
            </div>
            <div>
                <h3>В использовании</h3>
                <Used useds={useds} tr={tr}/>
            </div>
        </div>
    )
}

export default Telephones;