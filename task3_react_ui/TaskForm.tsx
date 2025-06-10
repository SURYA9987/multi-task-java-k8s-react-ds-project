import { Form, Input, Button } from 'antd';
import axios from 'axios';

export default function TaskForm() {
  const onFinish = (values: any) => {
    axios.post('/tasks', values).then(res => console.log(res));
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Task Name" name="name"><Input /></Form.Item>
      <Form.Item label="Owner" name="owner"><Input /></Form.Item>
      <Form.Item label="Command" name="command"><Input /></Form.Item>
      <Form.Item><Button type="primary" htmlType="submit">Create</Button></Form.Item>
    </Form>
  );
}
