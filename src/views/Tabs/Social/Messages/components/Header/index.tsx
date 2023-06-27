import React from "react";
import { Title, Container } from "./styles";
import { Text } from "~components";
import { FlatList } from "react-native";
import { Preview } from "../Preview";
import { mockRequest } from "~views/Tabs/Social/Messages/__mocks__";

export const Header = () => {
  return (
    <Container>
      <Title>
        <Text fontWeight="bold">Catch</Text>
      </Title>
      <FlatList
        data={mockRequest.data}
        keyExtractor={(message) => String(message.id)}
        renderItem={({ item }) => <Preview item={item} />}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      <Title>
        <Text fontWeight="bold">Messages</Text>
      </Title>
    </Container>
  );
};