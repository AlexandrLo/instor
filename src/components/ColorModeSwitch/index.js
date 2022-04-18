import React from "react";

import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { WeatherMoonFilled, WeatherSunnyFilled } from "@fluentui/react-icons";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack color="gray.400">
      <WeatherMoonFilled fontSize="1.5rem" />
      <Switch onChange={toggleColorMode} isChecked={colorMode === "light"} />
      <WeatherSunnyFilled fontSize="1.5rem" />
    </HStack>
  );
}

export default ColorModeSwitch;
