import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import RatingStars from "./RatingStars";

const reviewsData = {
  averageRating: 4.5,
  reviews: [
    {
      id: 1,
      avatar: "assets/images/avatars/user-avatar-1.png",
      name: "Alex",
      rating: 4,
      review: "Example Review",
    },
    {
      id: 2,
      avatar: "assets/images/avatars/user-avatar-2.png",
      name: "Alex",
      rating: 4,
      review: "Example Review",
    },
    {
      id: 3,
      avatar: "assets/images/avatars/user-avatar-3.png",
      name: "Alex",
      rating: 4,
      review: "Example Review",
    },
    {
      id: 4,
      avatar: "assets/images/avatars/user-avatar-4.png",
      name: "Alex",
      rating: 4,
      review: "Example Review",
    },
    {
      id: 5,
      avatar: "assets/images/avatars/user-avatar-5.png",
      name: "Alex",
      rating: 4,
      review: "Example Review",
    },
  ],
};

function ReviewsCard() {
  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <HStack
      justify="space-between"
      p="1rem"
      spacing="1rem"
      borderRadius="1rem"
      bg={bgColor}
    >
      <VStack spacing="0" align="start">
        <HStack>
          <RatingStars rating={reviewsData.averageRating} />
          <Text>{reviewsData.averageRating}</Text>
        </HStack>
        <Link variant="muted">
          <HStack spacing="0.25rem">
            <Text>{reviewsData.reviews.length} reviews</Text>
            <ArrowRightFilled />
          </HStack>
        </Link>
      </VStack>
      <HStack spacing="0" pr="1rem">
        {reviewsData.reviews.slice(0, 4).map((review) => (
          <Box key={review.id} w="1rem">
            <Image
              src={review.avatar}
              alt="Reviewer profile image"
              maxW="none"
              boxSize="2rem"
              borderRadius="full"
              border="2px"
              borderColor={bgColor}
            />
          </Box>
        ))}
      </HStack>
    </HStack>
  );
}

export default ReviewsCard;
