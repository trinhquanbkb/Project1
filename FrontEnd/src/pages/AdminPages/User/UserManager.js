import React, { useEffect } from 'react'
import './UserManager.css'
import { useDispatch, useSelector } from 'react-redux'

export default function UserManager() {
    const { getAllStudent } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const handleChangeData = () => {
        return getAllStudent.map((item, index) => {
            if (item.isDelete === 1) {
                return <tr key={index}>
                    <td style={{ color: 'red', verticalAlign: 'middle' }} className="pl-4">{item.id}</td>
                    <td>
                        <h5 style={{ color: 'red', margin: '12px 0' }} className="font-medium mb-0">{item.name}</h5>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: 'red' }} >{item.mssv}</span><br />
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: 'red' }} >{item.phoneNumber}</span><br />
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: 'red' }} >{item.email}</span><br />
                    </td>
                    <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2" onClick={() => { updateAccount(item) }} ><i class="fa fa-plus" /></button>
                    </td>
                </tr>
            }else{
                return <tr key={index}>
                    <td style={{ verticalAlign: 'middle' }} className="pl-4">{item.id}</td>
                    <td>
                        <h5 style={{ margin: '12px 0' }} className="font-medium mb-0">{item.name}</h5>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: '#8898aa'}} >{item.mssv}</span><br />
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: '#8898aa'}} >{item.phoneNumber}</span><br />
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                        <span style={{ color: '#8898aa'}} >{item.email}</span><br />
                    </td>
                    <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2" onClick={() => { deleteUser(item) }} ><i className="fa fa-trash" /></button>
                    </td>
                </tr>
            }

        })
    }

    const updateAccount = (item) => {
        dispatch({
            type: 'UPDATE_STUDENT',
            id: item.iddb
        })
    }

    const deleteUser = (item) => {
        dispatch({
            type: 'DELETE_STUDENT',
            id: item.iddb
        })
    }

    useEffect(() => {
        dispatch({
            type: 'GET_ALL_STUDENT'
        })
    }, [])

    return (
        <div>
            <div className="container-fluid" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table no-wrap user-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0 text-uppercase font-medium pl-4">Id</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Mssv</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Phone</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {handleChangeData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
