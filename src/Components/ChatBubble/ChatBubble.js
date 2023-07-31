import React from 'react'
import "../ChatBubble/ChatBubble.css"
export default function ChatBubble(props) {
    return (
        <>
            {
                props.message?.map(message => (
                    <div className='chatBody'>
                        {message}
                    </div>
                ))
            }

        </>
    )
}
