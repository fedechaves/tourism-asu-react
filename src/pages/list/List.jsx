import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Header from '../../components/header/Header';

const List = () => {
  return (
    <div>
        <NavBar/>
        <Header type="list"/>
        <div className="homeContainer"></div>
    </div>
  )
}

export default List
