import React, { useEffect, useState } from "react";

import { Container, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "components/PageHeader";
import ProductsGrid from "components/ProductsGrid";
import productsData from "assets/json/products.json";
import roomsData from "assets/json/rooms.json";

function RoomBlock() {
  let urlParams = useParams();
  let navigate = useNavigate();
  const [roomData, setRoomData] = useState({});
  const [roomProductsData, setRoomProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const room = roomsData.find((room) => room.id == urlParams.id);
    if (!room) {
      navigate("/404", { replace: true });
    } else {
      setRoomData(room);
      setRoomProductsData(
        productsData.filter(
          (product) =>
            product.rooms.filter((room) => room.id == urlParams.id).length > 0,
        ),
      );
      setIsLoading(false);
    }
  }, [urlParams]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }} flex="1 0 100%">
      <VStack spacing={{ base: "2rem", md: "3rem" }}>
        <PageHeader
          heading={roomData.name}
          description={roomData.description}
        />
        <ProductsGrid products={roomProductsData} isLoading={isLoading} />
      </VStack>
    </Container>
  );
}

export default RoomBlock;
