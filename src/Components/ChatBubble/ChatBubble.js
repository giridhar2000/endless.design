import React from 'react'
import "../ChatBubble/ChatBubble.css"

// const lineupElements = document.querySelectorAll('.lineup');

// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5 // Trigger when at least 50% of the element is visible
// };

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.animation = '2s anim-lineUp ease-out'; // Apply the animation style
//       observer.unobserve(entry.target); // Remove observer after animation is triggered
//     }
//   });
// }, observerOptions);

// lineupElements.forEach(element => {
//   observer.observe(element);
// });

export default function ChatBubble(props) {
    return (
        <>
            {
                props.message?.map(message => (
                    <div className='chatBody lineup'>
                        {message}
                    </div>
                ))
            }

        </>
    )
}
