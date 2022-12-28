import React from "react";
import classes from './InputInfo.module.css'

const InputInfo = ({named, phone, date, setNamed, setPhone, setDate}) => {




    return(
        <div className="form">
            <div className={classes.input}>
                <input
                type="text"
                value={named}
                onChange={(e) => setNamed(e.target.value)}
                placeholder= "Имя пользователя"/>
                <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder= "НОмер телефона"/>
                <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder= "Дата возврата"/>
            </div>
        </div>
    )
}
export default InputInfo;