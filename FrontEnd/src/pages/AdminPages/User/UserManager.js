import React, { useEffect, useState, useRef } from 'react'
import './UserManager.css'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Button, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';



export default function UserManager() {
    const { getAllStudent } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    //chức năng tạo lại tài khoản đã xóa
    const updateAccount = (item) => {
        dispatch({
            type: 'UPDATE_STUDENT',
            id: item
        })
    }

    //chức năng xóa tài khoản đang active
    const deleteAccount = (item) => {
        dispatch({
            type: 'DELETE_STUDENT',
            id: item
        })
    }

    useEffect(() => {
        dispatch({
            type: 'GET_ALL_STUDENT'
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [getAllStudent])

    const fetchData = () => {
        setLoading(true)
        setData(dataTable)
        setLoading(false)
    };

    //lấy dữ liệu từ state gán vào data của table và custom style cho nó
    const dataTable = () => {
        return getAllStudent.map((item, index) => {
            let idName = item.iddb + 'name'
            let idMssv = item.iddb + 'password'
            if (item.isDelete === 0) {
                return {
                    ...item,
                    idSort: item.iddb,
                    id: <p style={{ fontSize: '17px', fontWeight: '500', height: '14px' }}>{item.id}</p>,
                    name: <p id={idName} style={{ fontSize: '17px', fontWeight: '500', height: '14px' }}>{item.name}</p>,
                    mssv: <p id={idMssv} style={{ fontSize: '17px', fontWeight: '500', height: '14px' }}>{item.mssv}</p>,
                    phoneNumber: <p style={{ fontSize: '17px', fontWeight: '500', height: '14px' }}>{item.phoneNumber}</p>,
                    email: <p style={{ fontSize: '17px', fontWeight: '500', height: '14px' }}>{item.email}</p>,
                    isDelete: item.isDelete,
                    tags: ['delete', 'getBooks', 'chargeCard', item.iddb],
                    mssvSearch: item.mssv,
                    nameSearch: item.name,
                }
            }
            else {
                return {
                    ...item,
                    idSort: item.iddb,
                    id: <p id={item.id} style={{ fontSize: '17px', fontWeight: '500', height: '14px', color: 'red' }}>{item.id}</p>,
                    name: <p id={idName} style={{ fontSize: '17px', fontWeight: '500', height: '14px', color: 'red' }}>{item.name}</p>,
                    mssv: <p id={idMssv} style={{ fontSize: '17px', fontWeight: '500', height: '14px', color: 'red' }}>{item.mssv}</p>,
                    phoneNumber: <p style={{ fontSize: '17px', fontWeight: '500', height: '14px', color: 'red' }}>{item.phoneNumber}</p>,
                    email: <p style={{ fontSize: '17px', fontWeight: '500', height: '14px', color: 'red' }}>{item.email}</p>,
                    isDelete: item.isDelete,
                    tags: ['recreate', item.iddb],
                    mssvSearch: item.mssv,
                    nameSearch: item.name,
                }
            }
        })
    }

    // (từ đây)các chức năng để tìm kiếm
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText();
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => { handleSearch(selectedKeys, confirm, dataIndex) }}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => {
            if (dataIndex === 'mssv') {
                return record.mssvSearch === value
            }else if(dataIndex === 'name'){
                console.log(record.nameSearch)
                return record.nameSearch.trim().toLowerCase().includes(value.trim().toLowerCase())
            }
        },
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    //(đến đây) các chức năng tìm kiếm

    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
            width: 70,
        },
        {
            key: '2',
            title: 'NAME',
            dataIndex: 'name',
            width: 260,
            ...getColumnSearchProps('name'),
        },
        {
            key: '3',
            title: 'MSSV',
            dataIndex: 'mssv',
            width: 170,
            ...getColumnSearchProps('mssv'),
        },
        {
            key: '4',
            title: 'PHONE',
            dataIndex: 'phoneNumber',
            width: 170,
        },
        {
            key: '5',
            title: 'EMAIL',
            dataIndex: 'email',
            width: 260,
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color
                        if (tag === 'delete') {
                            color = 'red';
                            return (
                                <Button onClick={() => { deleteAccount(tags[3]) }} style={{ border: 'none', background: 'none' }} ><Tag color={color} key={tag}>
                                    DELETE
                                </Tag></Button>
                            )
                        } else if (tag === 'getBooks') {
                            color = 'green'
                            return (
                                <Button style={{ border: 'none', background: 'none' }} ><Tag color={color} key={tag}>
                                    GETBOOKS
                                </Tag></Button>
                            )
                        } else if (tag === 'chargeCard') {
                            color = 'yellow'
                            return (
                                <Button style={{ border: 'none', background: 'none' }} ><Tag color={color} key={tag}>
                                    CHARGECARD
                                </Tag></Button>
                            )
                        } else if (tag === 'recreate') {
                            color = 'black'
                            return (
                                <Button onClick={() => { updateAccount(tags[1]) }} style={{ border: 'none', background: 'none' }} ><Tag color={color} key={tag}>
                                    RECREATE
                                </Tag></Button>
                            )
                        }

                    })}
                </>
            ),
            filters: [
                { text: 'Deleted', value: 1 },
                { text: 'Active', value: 0 }
            ],
            onFilter: (value, record) => {
                return record.isDelete === value
            }
        }
    ];

    return (
        <div style={{ width: '1320px', margin: 'auto' }} >
            <h1 style={{ marginTop: '50px', marginBottom: '30px', fontWeight: 'bold' }}>Trang quản lý người dùng</h1>
            <Table size="large" columns={columns} dataSource={data} pagination={{
                current: page,
                pageSize: pageSize,
                total: dataTable.length,
                onChange: (page, pageSize) => {
                    setPage(page)
                    setPageSize(pageSize)
                }
            }}
                loading={loading} />
        </div>
    )
}