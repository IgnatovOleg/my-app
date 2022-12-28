import React from "react";
import classes from './Used.module.css'


const Used = ({useds, tr}) => {

    


    return(
        <div className={classes.used}>
            {useds.map((used) => (
                <div className={classes.usedIcon} vlalue={used}>
                    <h3
                    onClick={() => tr(used)}
                    value={used}>
                        {used.id}.{used.title} <br />
                        <strong>Данные пользователя</strong> <br />
                        Имя : {used.name} <br />
                        Номер телефона: {used.phone} <br />
                        Дата возврата: {used.date}
                    </h3>
                </div>
            ))}
        </div>
    )
}
export default Used;