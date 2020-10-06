import React, { Component } from 'react';
import './NavbarHeader.css';

class NavbarHeader extends Component {
	render(){
		return(
			<div className="navbar pos-f-t fixed-top">
        <div class="" className="navbar navbar-dark bg-dark fixed-top">
          <span class="text-left text-secondary eliminar col-1" className="" onclick="changeNav()">
           &#9776;</span>
          <span class="text-right text-secondary col-11" >
            <img class="border border-dark rounded-circle" height="32" width="32" alt="@chalo2812"
              src="https://avatars3.githubusercontent.com/u/6732307?v=4"/>
            <b>Gonzalo Sola</b>
          </span>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onclick="changeNav()">&times;</a>
          <a href="#index" onclick="changeNav()">Inicio</a>
          <a href="#home" onclick="changeNav()">Home</a>
          <a href="#info" onclick="changeNav()">Info</a>
        </div>
      </div>
    );
	}
}

export default NavbarHeader;