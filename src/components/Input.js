import React,{useState} from "react"
import Button from "./Button";

const Input = ({title,addHandler}) => {
    const [value , setValue] = useState(``)

    return (
        <div className={`input-container col-12 d-flex align-items-center`}>
            <div className={`col-lg-9 d-flex flex-column`}>
                <input value={value} type="text"
                       placeholder={title}
                       onChange={(e)=> setValue(e.target.value)}/>
            </div>
            <div className={`col-lg-3`}>
                <Button clickHandler={()=>addHandler(value)} text={`add`}/>
            </div>
        </div>
    )
}

export default Input