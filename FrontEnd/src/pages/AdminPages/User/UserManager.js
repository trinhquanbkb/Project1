import React, { useEffect } from 'react'
import './UserManager.css'
import { useDispatch, useSelector } from 'react-redux'

export default function UserManager() {

    const { getAllStudent } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    console.log(getAllStudent)
    const handleChangeData = () => {
        return getAllStudent.map((item, index) => {
            return <tr>
                    <td className="pl-4">{item.id}</td>
                    <td>
                        <h5 className="font-medium mb-0">{item.name}</h5>
                    </td>
                    <td>
                        <span className="text-muted">{item.mssv}</span><br />

                    </td>
                    <td>
                        <span className="text-muted">{item.phoneNumber}</span><br />
                    </td>
                    <td>
                        <span className="text-muted">{item.email}</span><br />
                    </td>
                    <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"><i className="fa fa-key" /> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash" /> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit" /> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-upload" /> </button>
                    </td>
                </tr>
        })
    }

    useEffect(() => {
        dispatch({
            type: 'GET_ALL_STUDENT'
        })
    }, [])

    return (
        <div>
            <div className="container-fluid" style={{marginTop: '50px'}}>
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
