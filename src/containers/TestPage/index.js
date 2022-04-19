import React from "react";

import { ArrowLeftFilled } from "@fluentui/react-icons";
import {
  Button,
  Checkbox,
  Container,
  HStack,
  Heading,
  Input,
  Switch,
  VStack,
} from "@chakra-ui/react";

import BannerImage1 from "assets/banner/banner-1.jpg";
import BannerImage2 from "assets/banner/banner-2.jpg";
import ColorModeSwitch from "components/ColorModeSwitch";
import NavBar from "components/NavBar";
import NumberInput from "components/NumberInput";
import SlidingBanner from "components/SlidingBanner";
import Banner from "components/Banner";

const banners = [
  {
    image: BannerImage1,
    heading: "30% off",
    lead: "High quality sofa",
    to: "/",
  },
  {
    image: BannerImage2,
    heading: "Sale",
    lead: "All chairs up to 50% off",
    to: "/",
  },
  {
    image: BannerImage1,
    heading: "Sale",
    lead: "All chairs up to 50% off",
    to: "/",
  },
];

function TestPage() {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" pb="5rem">
        <VStack align="start" spacing="1.5rem">
          <VStack align="start" spacing="0.5rem">
            <Heading as="h2" size="h2">
              Button
            </Heading>
            {/* Blur buttons */}
            <HStack>
              <Button
                size="md"
                variant="blur"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
              <Button
                size="sm"
                variant="blur"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
            </HStack>
            {/* Primary buttons */}
            <HStack>
              <Button
                size="md"
                variant="primary"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
              <Button
                size="sm"
                variant="primary"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
            </HStack>
            {/* Secondary buttons */}
            <HStack>
              <Button
                size="md"
                variant="secondary"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
              <Button
                size="sm"
                variant="secondary"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
            </HStack>
            {/* Brand buttons */}
            <HStack>
              <Button
                size="md"
                variant="brand"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
              <Button
                size="sm"
                variant="brand"
                leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
              >
                Back
              </Button>
            </HStack>
          </VStack>

          <VStack align="start" spacing="1rem">
            <Heading as="h2" size="h2">
              Input
            </Heading>
            {/* Default input */}
            <Input placeholder="Search" size="md" variant="brand" />
            <Input placeholder="Search" size="sm" variant="brand" />
            {/* Number input with buttons */}
            <HStack>
              <NumberInput maxW="54px" size="md" />
              <NumberInput maxW="38px" size="sm" />
            </HStack>
          </VStack>

          <VStack align="start" spacing="1rem">
            <Heading as="h2" size="h2">
              Checkbox
            </Heading>
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Checkbox>Remember me</Checkbox>
            <Checkbox disabled defaultChecked>
              Remember me
            </Checkbox>
            <Checkbox disabled>Remember me</Checkbox>
          </VStack>

          <VStack align="start" spacing="1rem">
            <Heading as="h2" size="h2">
              Switch
            </Heading>
            <Switch />
          </VStack>

          <VStack align="start" spacing="1rem">
            <Heading as="h2" size="h2">
              Color mode switch
            </Heading>
            <ColorModeSwitch />
          </VStack>

          <VStack align="start" spacing="1rem" w="100%">
            <Heading as="h2" size="h2">
              Banner
            </Heading>
            <SlidingBanner items={banners} />
            <Banner data={banners[1]} />
          </VStack>
        </VStack>
      </Container>
    </>
  );
}

export default TestPage;
