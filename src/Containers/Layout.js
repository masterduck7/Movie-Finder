import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

const { Header } = Layout;

class CustomLayout extends Component{
    render(){
        return (
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                        <Menu.Item><img alt="" src="movie.png" height="40px" /></Menu.Item>
                        <Menu.Item key="1"><Link to="/">Buscador de Películas</Link></Menu.Item>
                        <Menu.Item key="2">Favoritas</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default CustomLayout;