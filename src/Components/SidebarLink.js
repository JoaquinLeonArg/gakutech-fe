import React, { Component } from 'react'
import '../Styles/Tooltip.css'


export class SidebarLink extends Component {
    render() {
        return (
            <span className='tooltip-big' data-tooltip={this.props.name} data-flow='right'>
                { this.props.children }
            </span>
        )
    }
}

export default SidebarLink
