import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css'
const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
        <Typography.Title level={2}>LOGIN PAGE</Typography.Title>
        <Form
            className='form-login'
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                {
                    type: 'email',
                    message: 'It is not a valid email!'
                }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    span: 20,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 19,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </>
  );
};

export default Login;