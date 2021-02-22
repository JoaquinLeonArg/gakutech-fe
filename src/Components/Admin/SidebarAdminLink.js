import React, { Component } from 'react'
import '../../Styles/Admin/TooltipAdmin.css';

export class SidebarAdminLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tooltipVisible: false
        }
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter() {
        this.setState({tooltipVisible: true})
    }

    onMouseLeave() {
        this.setState({tooltipVisible: false})
    }

    render() {
        return (
            <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                { this.props.children }
                { this.state.tooltipVisible ? (
                null /* TODO: Add tooltip on hover */ )
                : null }
            </div>
        )
    }
}

export default SidebarAdminLink
