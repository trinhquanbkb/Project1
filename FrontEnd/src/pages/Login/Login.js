import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import './ForgotPassword.css'

export default function Login() {
    return (
        <div className='container-fluid m-0 p-0' style={{ backgroundImage: 'url("./hust_background.png")', backgroundSize: 'cover', width: '100%', height: '713.5px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '713.5px' }}>
                <div className='row'>
                    <div className='col-7'>

                    </div>
                    <div className='col-4 ml-3 mr-3'>
                        <div className='row'>
                            <div className="col-lg-11 ml-5 p-4 mr-5" style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '15px', marginTop: '40px' }}>
                                <div className="card-body p-md-4 mx-md-3">
                                    <form>
                                        <h1 style={{ paddingTop: '50px' }}>Đăng nhập</h1>
                                        <div className="form-outline mb-4 mt-5 mr-4 ml-3">
                                            <input type="email" id="form2Example11" className="form-control" placeholder="Mssv/msnv" />
                                        </div>
                                        <div className="form-outline mb-4 mr-4 ml-3">
                                            <input type="password" id="form2Example22" className="form-control" placeholder="Mật khẩu" />
                                        </div>
                                        <div className="text-center pt-1 mb-5 pb-1" style={{ paddingLeft: '88px' }}>
                                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2" style={{ width: '180px', fontSize: '16px' }} 
                                            type="button"><NavLink className="nav-link" to="/adminPage">Đăng nhập</NavLink></button>
                                            <a className="text-muted" href="#!" style={{ fontSize: '13px', paddingRight: '88px' }} data-toggle="modal" data-target="#modelId">Quên mật khẩu?</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2" style={{ fontSize: '12px' }}>Bạn chưa có tài khoản?</p>
                                            <button type="button" style={{ fontSize: '13px' }} className="ml-4 btn btn btn-light btn-outline-info"><NavLink className="nav-link" to="/register">Đăng ký ngay</NavLink></button>
                                        </div>

                                        {/* Modal */}
                                        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div  style={{marginTop: '22%', borderRadius:'11px'}} className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Thay đổi mật khẩu</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body" style={{ height: '250px' }}>
                                                        <span className='text-success'>Bạn cần xác nhận những thông tin sau!</span>
                                                        <div className='container' style={{width: '100%', marginTop: '20px'}}>
                                                            <div className='row'>
                                                                <div className='col-8'>
                                                                    <div className="group">
                                                                        <input name='phone' type="text" required />
                                                                        <span className="highlight" />
                                                                        <span className="bar-full" />
                                                                        <label>Số điện thoại</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='container' style={{width: '100%', marginTop: '-30px'}}>
                                                            <div className='row'>
                                                                <div className='col-8'>
                                                                    <div className="group">
                                                                        <input name='phone' type="text" required />
                                                                        <span className="highlight" />
                                                                        <span className="bar-full" />
                                                                        <label>Mssv</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                                                        <button type="button" className="btn btn-primary">Xác nhận</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

