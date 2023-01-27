import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { Menu, Drawer} from 'antd';
import FormRegisterAdmin from './FormRegisterAdmin';
import ChangePassword from './ChangePassword';

export default function DropDownAdmin() {

    const [openRegister, setOpenRegister] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);

    const showDrawerRegister = () => {
        setOpenRegister(true);
    };
    const onCloseRegister = () => {
        setOpenRegister(false);
    };

    const showDrawerChangePassword = () => {
        setOpenChangePassword(true);
    };
    const onCloseChangePassword = () => {
        setOpenChangePassword(false);
    };


    return (
        <Menu.SubMenu theme="light" icon=<UserOutlined style={{ fontSize: '25px', marginLeft: '80px' }} />>
            <Menu.Item><NavLink className="nav-link" to="/adminPage" onClick={showDrawerRegister} style={{ fontSize: '15px', fontWeight: '500', color: '#303f9f' }}>
                Đăng ký cho admin
            </NavLink></Menu.Item>
            <Menu.Item><NavLink className="nav-link" to="/adminPage" onClick={showDrawerChangePassword} style={{ fontSize: '15px', fontWeight: '500', color: '#303f9f' }}>
                Đổi mật khẩu
            </NavLink></Menu.Item>
            <Drawer title="Đăng ký tài khoản admin" width={650} placement="right" onClose={onCloseRegister} open={openRegister}>
                <FormRegisterAdmin/>
            </Drawer>
            <Drawer title="Đổi mật khẩu" width={650} placement="right" onClose={onCloseChangePassword} open={openChangePassword}>
                <ChangePassword/>
            </Drawer>
            <Menu.Item><NavLink className="nav-link" to="/login" style={{ fontSize: '15px', fontWeight: '500', color: '#303f9f' }}>Đăng xuất</NavLink></Menu.Item>
        </Menu.SubMenu>
    );
}
