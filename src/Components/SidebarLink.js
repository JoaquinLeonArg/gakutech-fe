import React, { Component } from 'react'
import { useMediaPredicate } from "react-media-hook";
import '../Styles/Tooltip.css'


export function SidebarLink(props) {
    if (useMediaPredicate('only screen and (max-width: 768px)'))
        return (
            <div className='sidebar-link-mobile-container'>
                { props.children }
                <div>{props.name}</div>
            </div>
        )

    return (
        <span className='tooltip-big' data-tooltip={props.name} data-flow='right'>
            { props.children }
        </span>
    )
}

export default SidebarLink
