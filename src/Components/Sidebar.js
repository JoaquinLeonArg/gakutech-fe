import React from 'react';

export class Sidebar extends React.Component {
    render() {
        return (
            <div className={'sidebar' + ((this.props.wide===true) ? 'sidebar-wide' : '')}>
                <div className='sidebar-bg b1'/>
                <div className='sidebar-bg b2'/>
                <div className='sidebar-bg b3'/>
                <div className='sidebar-container'>
                    <a href='https://gakutech.com' className='sidebar-back'>Back to Gakutech's homepage</a>
                    <p className='sidebar-title'>Our<br/>games</p>
                    { this.props.children }
                </div>
            </div>
        )
    }
}