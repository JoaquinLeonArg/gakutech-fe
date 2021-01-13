import React from 'react';
import { Link } from 'react-router-dom'
import { MdVideogameAsset, MdFace, MdRateReview } from 'react-icons/md';
import SidebarLink from './SidebarLink'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-bg'/>
                <div className='logo-container'>
                    <img className='logo' src='/logo.png' alt='G'/>
                    <div className='logo-text'>Gakutech</div>
                </div>
                <div className='sidebar-container'>
                    <SidebarLink name='Home'><Link to='/'>
                        <MdRateReview className='sidebar-icon'></MdRateReview>
                    </Link></SidebarLink>

                    <SidebarLink name='Games'><Link to='/games'>
                        <MdVideogameAsset className='sidebar-icon'></MdVideogameAsset>
                    </Link></SidebarLink>

                    <SidebarLink name='About us'><Link to='/about'>
                        <MdFace className='sidebar-icon'></MdFace>
                    </Link></SidebarLink>
                </div>
            </div>
        )
    }
}