import React from "react";

import { Button, Link } from "@chakra-ui/react";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function SocialButtons() {
  return (
    <>
      <Button
        as={Link}
        href="https://instagram.com/"
        variant="ghost"
        colorScheme="instagram"
        size="sm"
      >
        <FaInstagram size={24} />
      </Button>
      <Button
        as={Link}
        href="https://youtube.com/"
        variant="ghost"
        colorScheme="youtube"
        size="sm"
      >
        <FaYoutube size={24} />
      </Button>
      <Button
        as={Link}
        href="https://pinterest.com/"
        variant="ghost"
        colorScheme="pinterest"
        size="sm"
      >
        <FaPinterest size={24} />
      </Button>
    </>
  );
}

export default SocialButtons;
