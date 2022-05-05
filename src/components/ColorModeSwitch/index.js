import React from "react";

import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import {
  WeatherMoon24Filled,
  WeatherSunny24Filled,
} from "@fluentui/react-icons";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack color="gray.400">
      <WeatherMoon24Filled />
      <Switch onChange={toggleColorMode} isChecked={colorMode === "light"} />
      <WeatherSunny24Filled />
    </HStack>
  );
}

export default ColorModeSwitch;
