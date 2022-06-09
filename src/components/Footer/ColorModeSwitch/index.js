import React from "react";

import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import {
  WeatherMoon,
  WeatherSunny,
} from "@styled-icons/fluentui-system-filled";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack color="gray.400">
      <WeatherMoon size={24} />
      <Switch onChange={toggleColorMode} isChecked={colorMode === "light"} />
      <WeatherSunny size={24} />
    </HStack>
  );
}

export default ColorModeSwitch;
