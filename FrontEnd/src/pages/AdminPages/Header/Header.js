import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './HeaderCss.css'


const { Header, Content, Sider, Footer } = Layout;

export default function HeaderAdmin() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item style={{ height: '45px', fontSize: '16px' }}>
                        Thư viện Đại học Bách Khoa Hà Nội
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    width={240}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}>
                        <Menu.Item key="/adminPage/indexAdmin" style={{ height: '45px', marginTop: '40px' }}>
                            <NavLink className="nav-link" to="/adminPage/indexAdmin" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Trang chủ</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/adminPage/userManager" style={{ height: '45px' }}>
                            <NavLink className="nav-link" to="/adminPage/userManager" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Tài khoản người dùng</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/adminPage/bookAdminPage" style={{ height: '45px' }}>
                            <NavLink className="nav-link" to="/adminPage/bookAdminPage" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Quản lý sách</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/adminPage/placeAdminPage" style={{ height: '45px' }}>
                            <NavLink className="nav-link" to="/adminPage/placeAdminPage" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Quản lý chỗ ngồi</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '10px 0',
                        }}
                    >

                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Design 2023 Created by QLTV</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};