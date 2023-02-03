import React, { useEffect } from 'react'
import { Button, Form, Input, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { STATUS_CODE } from '../../../utils/constant/statusCode';
import { useNavigate } from 'react-router-dom'
import { BORROW_BOOK_BY_USERID, CHECK_ID_BOOK_REDUCER } from '../../../redux/type/BookType';
import { TOKEN_ADMIN } from '../../../utils/constant/data';
import { CHECK_MSSV_REDUCER } from '../../../redux/type/UserType';

export default function RegisterBook() {

  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const { statusBorrow, checkIdBook } = useSelector(state => state.bookReducer)
  const { checkMssv } = useSelector(state => state.userReducer)
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
    setTimeout(confirm, 100)
  }, [statusBorrow])

  const onFinish = (values) => {
    //check mssv
    dispatch({
      type: 'CHECK_MSSV',
      data: values.mssv
    })
    //check id book
    dispatch({
      type: 'CHECK_BOOK_ID',
      data: values.idBook
    })
    //send data check status register book
    dispatch({
      type: 'BORROW_BOOK',
      data: values
    })
  };


  const confirm = (e) => {
    if (statusBorrow === STATUS_CODE.SUCCESS_PUT && checkIdBook === true && checkMssv === true) {
      message.success('Thành công!');
    } else if (statusBorrow === STATUS_CODE.CLIENT_ERROR) {
      message.error('Đã có người mượn quyển sách này!')
    } else if (checkIdBook === false && statusBorrow === STATUS_CODE.NOT_FOUND) {
      message.error('Không tồn tại id của quyển sách này!')
    } else if (checkMssv === false && statusBorrow === STATUS_CODE.NOT_FOUND) {
      message.error('Không tồn tại mssv của người dùng này!')
    } else if (statusBorrow === null) {
    }
    setTimeout(() => {
      dispatch({
        type: BORROW_BOOK_BY_USERID,
        data: null
      })
      dispatch({
        type: CHECK_MSSV_REDUCER,
        data: null
      })
      dispatch({
        type: CHECK_ID_BOOK_REDUCER,
        data: null
      })
    }, 100)
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
          maxWidth: 880,
          marginTop: '100px'
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
        <span style={{ color: 'green', marginLeft: '-30px' }}>Chú ý: Id sách tham khảo ở trang 'Danh sách các quyển sách'</span>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
          style={{ marginTop: '20px' }}
        >
          <Popconfirm
            title="Đăng ký mượn sách"
            description="Bạn có chắc chắn cho sinh viên này mượn sách?"
            onConfirm={(e) => {
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
