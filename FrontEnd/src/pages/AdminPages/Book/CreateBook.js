import React, { useEffect } from 'react'
import { Button, Form, Input, Select, message, Popconfirm, Upload } from 'antd';
import listTitleOption from './listTitleOption.json'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TOKEN_ADMIN } from '../../../utils/constant/data';
import { UploadOutlined } from '@ant-design/icons';
import Axios from 'axios'
import { DOMAIN_SERVER } from '../../../utils/constant/domain'

export default function CreateBook() {
  const { Option } = Select
  const dispatch = useDispatch()
  const { newBook } = useSelector(state => state.bookReducer)
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  useEffect(() => {
    if (!localStorage.getItem(TOKEN_ADMIN)) {
      navigate('/login', { replace: true })
    }

  }, [])

  useEffect(() => {
    setTimeout(confirm, 400)
  }, [newBook])

  const onFinish = (values) => {
    dispatch({
      type: 'VALUE_CREATE_BOOK',
      data: values
    })
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const renderOptionTitle = () => {
    return listTitleOption.map(item => {
      return <Option value={item.title}>{item.title}</Option>
    })
  }

  function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
  }


  const confirm = (e) => {
    if (!isEmptyObject(newBook)) {
      dispatch({
        type: 'CONFIRM_CREATE_BOOK',
        data: newBook
      })
      dispatch({
        type: 'VALUE_CREATE_BOOK',
        data: {}
      })
      message.success('Thành công!');
    }
  };

  const cancel = (e) => {
    message.error('Chưa xác nhận!');
  };

  //upload
  const uploadChange = async (e) => {
    // var bodyFormData = new FormData()
    // bodyFormData.append('image', ) 
    // Axios.post("http://localhost:3000/api/v1/books/uploadImage", { avatar: formData }, {
    //   headers: {
    //     token: localStorage.getItem(TOKEN_ADMIN)
    //   }
    // })
    const fromData = new FormData();
    fromData.append("file", e.target.files[0]);
    let response = await Axios.post("http://localhost:3000/api/v1/books/uploadImage", fromData, {
      headers: {
        token: localStorage.getItem(TOKEN_ADMIN),
        "Content-Type": "multipart/form-data",
      }
    })
    console.log(response)
  }


  return (
    <div>
      <h3 style={{ textAlign: 'left', marginLeft: '50px', fontSize: '29px' }}>
        Tạo thêm sách
      </h3>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          maxWidth: 880,
          marginTop: '40px'
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name='name'
          label="Tên sách"
          rules={[
            {
              required: true,
              message: 'Xin hãy nhập tên sách!',
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='author'
          label="Tác giả"
          rules={[
            {
              required: true,
              message: 'Xin hãy nhập tên tác giả!',
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='title'
          label="Tiêu đề"
          rules={[
            {
              required: true,
              message: 'Xin hãy chọn tiêu đề!',
            },
          ]}
          style={{ textAlign: 'left', height: '40px' }}
        >
          <Select style={{ width: '200px', textAlign: 'left', marginLeft: '15px' }} placeholder="Chọn tiêu đề ...">
            {renderOptionTitle()}
          </Select>
        </Form.Item>
        <Form.Item
          name='countPage'
          label="Số trang"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]+$/),
              message: 'Xin hãy nhập số trang bằng số!'
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='year'
          label="Năm xuất bản"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]+$/),
              message: 'Xin hãy nhập năm xuất bản bằng số!'
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='positionBook'
          label="Vị trí sách"
          rules={[
            {
              required: true,
              message: 'Xin hãy nhập vị trí trên giá sách!',
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='upload'
          label="Chọn ảnh"
          rules={[
            {
              required: true,
              message: 'Xin hãy lấy một ảnh làm ảnh của sách!',
            },
          ]}
          style={{ minHeight: '40px', textAlign: 'left' }}
        >
          <form onChange={uploadChange} enctype="multipart/form-data">
            <input type="file" name="file" />
          </form>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
          style={{ marginTop: '30px' }}
        >
          <Popconfirm
            title="Tạo sách"
            description="Bạn có chắc chắn thêm sách này?"
            onConfirm={() => {
              form.submit()
            }
            }
            onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </div>
  )
}
