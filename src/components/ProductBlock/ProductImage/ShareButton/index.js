import React from "react";

import { ShareAndroid } from "@styled-icons/fluentui-system-filled";
import { Button, useClipboard, useToast } from "@chakra-ui/react";

function ShareButton() {
  const { onCopy } = useClipboard(window.location.href);
  const toast = useToast();

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: "Instor",
        url: window.location.href,
      });
    } else {
      onCopy();
      toast({
        position: "top",
        title: "Copied to clipboard",
        description: "Page address was copied to clipboard",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Button variant="blur" onClick={sharePage}>
      <ShareAndroid size={24} />
    </Button>
  );
}

export default ShareButton;
