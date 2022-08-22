/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-08-22 11:39:00
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-08-22 14:29:54
 * @FilePath: /ss/src/compoents/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'
import './login.less'
function Login() {
    const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className = 'loginBody' >
     <Form
      name="basic"
      labelCol={{ span: 8 , color:"red"}}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="用户名称"
        name="username"
        rules={[{ required: true, message: '请输入用户名称!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
           登录
        </Button>
        <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}}>
           注册
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default Login;