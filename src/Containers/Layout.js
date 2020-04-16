import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '../Assets/movie.png';
import "antd/dist/antd.css";

const { Header } = Layout;

class CustomLayout extends Component{
    render(){
        return (
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                        <Menu.Item><Link to="/"><img alt="Movie" src={logo} height="40px" /></Link></Menu.Item>
                        <Menu.Item key="1"><Link to="/">Buscador de Películas</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/favorite-movies">Favoritas</Link></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default CustomLayout;