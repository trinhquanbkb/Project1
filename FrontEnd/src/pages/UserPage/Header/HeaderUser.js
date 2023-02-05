import React, { useEffect, useState } from 'react'
import { Layout, Menu, theme, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'
import { TOKEN_USER } from '../../../utils/constant/data';
import DropDownUser from '../User/DropDownUser';
import { NavLink, Outlet } from 'react-router-dom'


export default function HeaderUser() {
    const { Header, Content, Footer } = Layout
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem(TOKEN_USER)) {
            navigate('/login', { replace: true })
        }
    }, [])

    const items = [{
        label: 'Sách',
        key: 'book',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    }]
    const [current, setCurrent] = useState('mail');
    return (
        <Layout className="layout" style={{ width: '100%' }}>
            <Header className="header" style={{ width: '107%', marginLeft: '-55px', height: '64px', position: 'sticky', top: '0', zIndex: '1' }}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Row justify="start" style={{ width: '100%', height: '64px' }}>
                        <Col span={5}>
                            <p style={{ fontSize: '16px', marginBottom: '0', marginLeft: '-10px' }}>
                                Thư viện Tạ Quang Bửu
                            </p>
                        </Col>
                        <Col className="gutter-row" span={17}>
                            <Row>
                                <Col span={5} style={{ height: '64px' }}></Col>
                                <Col span={3} style={{ height: '64px' }}>
                                    <Menu><NavLink className="nav-link" to="/userPage" style={{ color: 'black', fontWeight: '600', fontSize: '18px', padding: '0', borderRight: '1px solid #bdbdbd' }}>Trang chủ</NavLink></Menu>
                                </Col>
                                <Col span={3} style={{ height: '64px' }}>
                                    <Menu theme='light' style={{ color: 'black', fontWeight: '600', fontSize: '18px', paddingLeft: '32px', paddingBottom: '1px', borderRight: '1px solid #bdbdbd', borderBottom: '1px solid white' }} selectedKeys={[current]} mode="horizontal" items={items} />
                                </Col>
                                <Col span={3} style={{ height: '64px' }}>
                                    <Menu><NavLink className="nav-link" to="/userPage/introduce" style={{ color: 'black', fontWeight: '600', fontSize: '18px', padding: '0', borderRight: '1px solid #bdbdbd' }} >Giới thiệu</NavLink></Menu>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={2}>
                            <DropDownUser />
                        </Col>
                    </Row>
                </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{
                    marginTop: 0,
                    minHeight: 580,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                }}
            >
                <Outlet />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                }}
            >
                <div>
                    <div>
                        <Row style={{ height: '200px' }}>
                            <Col span={6}>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Logo_Hust.png' alt='icon_layout' style={{ width: '93px', height: '130px', marginTop: '30px' }} />
                            </Col>
                            <Col span={16} style={{ textAlign: 'left', paddingTop: '20px' }}>
                                <h4 style={{ color: '#b71c1c', fontWeight: '600' }}>THƯ VIỆN TẠ QUANG BỬU - TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI</h4>
                                <p style={{ marginTop: '40px' }}>Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                                <p style={{ marginTop: '-5px' }}>Điện thoại: (84-24) 3869 2243, Email: tvtqb@hust.edu.vn</p>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ color: 'grey', backgroundColor: 'black', height: '50px', paddingTop: '15px' }}>Bản quyền © 2023, Thư viện Tạ Quang Bửu - Trường Đại học Bách khoa Hà Nội.</div>
                </div>
            </Footer>
        </Layout>
    )
}
