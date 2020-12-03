import React from 'react'

const SpinnerIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} 
            width="100px" height="100px" 
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="2" stroke="#3a2f2d" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            {/* <!-- [ldio] generated by https://loading.io/ --> */}
        </svg>
    )
}

export default SpinnerIcon
