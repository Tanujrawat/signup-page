import { Input, Button, Flex } from "antd";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Re-Enter Password" />
      <Flex wrap gap="small" className="site-button-ghost-wrapper">
        <Button type="primary">
          Log in
        </Button>
      </Flex>
    </div>
  );
}

export default App;
