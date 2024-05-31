import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import MyComponent from '../components/MyComponent';

const App: React.FC = () => {
  return (
    <div style={{ background: "#f0f4f8", minHeight: "100vh" }}>
      <ChakraProvider>
        <MyComponent />
      </ChakraProvider>
    </div>
  );
};

export default App;