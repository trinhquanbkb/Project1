import React, { useEffect } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import { TOKEN_USER } from '../../../utils/constant/data';



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

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                />
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
