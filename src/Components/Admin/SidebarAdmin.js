import React from 'react';
import { Link } from 'react-router-dom'
import { MdVideogameAsset, MdFace, MdRateReview } from 'react-icons/md';
import SidebarAdminLink from '../Admin/SidebarAdminLink';
import '../../Styles/Admin/SidebarAdmin.css';

export class SidebarAdmin extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-bg'/>
                <div className='logo-container'>
                    <img className='logo' src='/logo.png' alt='G'/>
                    <div className='logo-text'>Gakutech</div>
                </div>
                <div className='sidebar-container'>
                    <SidebarAdminLink><Link to='/'>
                        <MdRateReview className='sidebar-icon'></MdRateReview>
                    </Link></SidebarAdminLink>

                    <SidebarAdminLink><Link to='/games'>
                        <MdVideogameAsset className='sidebar-icon'></MdVideogameAsset>
                    </Link></SidebarAdminLink>

                    <SidebarAdminLink><Link to='/about'>
                        <MdFace className='sidebar-icon'></MdFace>
                    </Link></SidebarAdminLink>
                </div>
            </div>
        )
    }
}