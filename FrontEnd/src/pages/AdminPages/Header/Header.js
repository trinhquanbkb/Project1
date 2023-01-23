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
                    <Menu.Item style={{ height: '45px', fontSize: '16px', marginLeft: '-45px' }}>
                        Thư viện Đại học Bách Khoa Hà Nội
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    width={250}
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
                        <img src='https://thuvienvector.com/upload/images/items/vector-logo-truong-dai-hoc-bach-khoa-file-cdr-coreldraw-ai-216.webp' alt='icon_layout' style={{width: '140px', height: '80px', marginTop: '10px'}}/>
                        <Menu.Item key="/adminPage/indexAdmin" style={{ height: '45px', marginTop: '20px' }}>
                            <NavLink className="nav-link" to="/adminPage/indexAdmin" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Trang chủ</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/adminPage/userManager" style={{ height: '45px' }}>
                            <NavLink className="nav-link" to="/adminPage/userManager" style={{ fontSize: '17px', fontWeight: '500', textAlign: 'left' }}>Quản lý người dùng</NavLink>
                        </Menu.Item>
                        <Menu.SubMenu title="Quản lý sách" style={{fontSize: '17px', fontWeight: '500', marginLeft: '-55px'}}>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookManager/listBook" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Danh sách quyển sách</NavLink></Menu.Item>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookManager/createBook" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Tạo sách mới</NavLink></Menu.Item>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookManager/registerBook" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Đăng ký mượn sách</NavLink></Menu.Item>   
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookManager/emptyBook" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Sách chưa giả</NavLink></Menu.Item>                            
                        </Menu.SubMenu>
                        <Menu.SubMenu title="Quản lý chỗ ngồi" style={{fontSize: '17px', fontWeight: '500', marginLeft: '-21px'}} disabled>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookAdminPage" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Danh sách quyển sách</NavLink></Menu.Item>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookAdminPage" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Tạo sách mới</NavLink></Menu.Item>
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookAdminPage" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Đăng ký mượn sách</NavLink></Menu.Item>   
                            <Menu.Item><NavLink className="nav-link" to="/adminPage/bookAdminPage" style={{ fontSize: '15px', fontWeight: '500', textAlign: 'left', marginLeft: '50px', color: '#303f9f' }}>Sách chưa giả</NavLink></Menu.Item>                            
                        </Menu.SubMenu>
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