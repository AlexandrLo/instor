import React, { useState } from "react";

import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);

  const validate = () => {
    setEmailError(email === "");
    setPasswordError(password === "");
  };

  return (
    <VStack spacing="1rem" align="start">
      <FormControl isInvalid={emailError}>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={passwordError}>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassChange}
        />
        {passwordError && (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <Checkbox defaultChecked>Remember me</Checkbox>
      <Button colorScheme="orange" w="100%" onClick={validate}>
        Log In
      </Button>
      <Button variant="solid" w="100%">
        Sign Up
      </Button>
      <Button variant="ghost-link" w="100%" colorScheme="orange">
        Forgot password
      </Button>
    </VStack>
  );
}

export default LoginForm;
