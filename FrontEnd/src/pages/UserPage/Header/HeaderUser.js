import React, { useEffect, useState } from 'react'
import { Layout, Menu, theme, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'
import { TOKEN_USER } from '../../../utils/constant/data';
import DropDownUser from '../User/DropDownUser';
import { BookOutlined } from '@ant-design/icons';


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
        icon: <BookOutlined style={{ fontSize: '20px' }} />,
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
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Row justify="start" style={{ width: '100%' }}>
                        <Col span={5}>
                            <p style={{ fontSize: '16px', marginBottom: '0' }}>
                                Thư viện Đại học Bách Khoa Hà Nội
                            </p>
                        </Col>
                        <Col className="gutter-row" span={17}>
                            <Row>
                                <Col span={5}></Col>
                                <Col span={3}>
                                    <Menu theme='dark' style={{ color: 'white', fontWeight: '600', fontSize: '18px' }} selectedKeys={[current]} mode="horizontal" items={items} />
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
                    padding: '0 50px',
                    marginTop: '50px'
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 530,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}
