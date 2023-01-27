import React, { useEffect } from 'react'
import { Button, Form, Input, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { STATUS_CODE } from '../../../utils/constant/statusCode';
import { BORROW_BOOK_BY_USERID } from '../../../redux/type/BookType';

export default function RegisterBook() {

  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const { statusBorrow } = useSelector(state => state.bookReducer)

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
    setTimeout(confirm, 400)
  }, [statusBorrow])

  const onFinish = (values) => {
    dispatch({
      type: 'BORROW_BOOK',
      data: values
    })
  };

  const confirm = (e) => {
    if (statusBorrow === STATUS_CODE.SUCCESS_PUT) {
      message.success('Thành công!');
    } else if (statusBorrow === STATUS_CODE.CLIENT_ERROR) {
      message.error('Đã có người mượn quyển sách này!')
    } else if (statusBorrow === null){

    }
    dispatch({
      type: BORROW_BOOK_BY_USERID,
      data: null
  })
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const cancel = (e) => {
    message.error('Chưa xác nhận!');
  };


  return (
    <div>
      <h3 style={{ textAlign: 'left', marginLeft: '50px', fontSize: '29px' }}>
        Đăng ký mượn sách cho người dùng
      </h3>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          maxWidth: 500,
          marginLeft: '200px',
          marginTop: '40px'
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name='mssv'
          label="Mssv"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]{8}$/),
              message: 'Xin hãy nhập mssv với 8 chữ số!'
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          name='idBook'
          label="Id sách"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]+$/),
              message: 'Xin hãy nhập id sách bằng số!'
            },
          ]}
          style={{ height: '40px' }}
        >
          <Input style={{ marginLeft: '15px' }} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Popconfirm
            title="Đăng ký mượn sách"
            description="Bạn có chắc chắn cho sinh viên này mượn sách?"
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
