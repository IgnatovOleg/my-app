import React from "react";
import classes from './Telephones.module.css'

const TelephonesItem = ({tel, transfer}) => {


    return(
        <div key={tel.id}>
            <h2 className={classes.header_text}
            onClick={() => transfer(tel)}
            value={tel}>
                {tel.id}.{tel.title}
            </h2>
        </div>
    )
}
export default TelephonesItem;