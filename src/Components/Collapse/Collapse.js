import React, { useState } from 'react'
import "../Collapse/Collapse.css"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

export default function Collapse(props) {
    const [open, setOpen] = useState("")
    return (
        <div className='collapse' onClick={() => setOpen(!open)}>
            <div className='collapseHead'>
                <p>{props.title}</p>
                {open ?
                    <MinusOutlined />
                    :
                    <PlusOutlined />
                }
            </div>
            {open ?
                <div className='collapseBody'>
                    {props.body}
                </div>
                :
                ""
            }
        </div>
    )
}
