import React from 'react';
import { Result, Button } from 'antd';
export default () => (
  <Result
    style={{ height: '100vh' }}
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  ></Result>
);
