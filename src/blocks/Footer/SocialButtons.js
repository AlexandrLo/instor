import React from "react";

import { Button, Link } from "@chakra-ui/react";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function SocialButtons() {
  return (
    <>
      <Button
        as={Link}
        href="https://instagram.com/"
        variant="ghost-instagram"
        size="sm"
        borderRadius="full"
      >
        <FaInstagram size={24} />
      </Button>
      <Button
        as={Link}
        href="https://youtube.com/"
        variant="ghost-youtube"
        size="sm"
        colorScheme="gray"
        borderRadius="full"
      >
        <FaYoutube size={24} />
      </Button>
      <Button
        as={Link}
        href="https://pinterest.com/"
        variant="ghost-pinterest"
        size="sm"
        colorScheme="gray"
        borderRadius="full"
      >
        <FaPinterest size={24} />
      </Button>
    </>
  );
}

export default SocialButtons;
