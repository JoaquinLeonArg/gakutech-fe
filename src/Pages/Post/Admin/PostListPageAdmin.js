import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PostListAdmin from '../../../Components/Admin/PostListAdmin';
import '../../../Styles/Admin/ButtonsAdmin.css';
import {MdAddCircle} from 'react-icons/md';

export default function PostListPage() {
  let { url } = useRouteMatch();

  return (
    <div>
      <PostListAdmin />
      <Link to={`${url}/add`}>
      <MdAddCircle className='add-button is-link icon-button'></MdAddCircle>
      </Link>
    </div>
  );
}
