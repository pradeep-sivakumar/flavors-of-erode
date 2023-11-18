//   const onFinish = () => {
//     message.success("Submit success!");
//   };

//   const onFinishFailed = () => {
//     message.error("Submit failed!");
//   };

import React, { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Card, message } from "antd";
const AdminLogin = () => {
  return (
    <div className="flex items-center text-yellow-50 justify-center h-screen w-screen bg-slate-600">
     guig
      {/* <Card
        bordered={true}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card> */}
      <Button onClick={()=>{
        message.success("Pradeep");
      }}>Pradeep</Button>
    </div>
  );
};
export default AdminLogin;
