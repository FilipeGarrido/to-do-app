import React from "react"
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="/" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> ToDo App
                </a>
            </div>
            <div id='navbar' className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/">Tarefas</NavLink></li>
                    <li><NavLink to="/about">Sobre</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
)