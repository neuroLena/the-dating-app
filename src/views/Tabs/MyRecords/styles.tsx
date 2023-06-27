import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Text from "~components/Text";

export const Tab = createMaterialTopTabNavigator();

export const Container = styled(SafeAreaView).attrs({
  edges: ["left", "right"],
})`
  flex: 1;
  padding-bottom: 50px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled(Text).attrs({
  fontSize: "h3",
  fontWeight: "bold",
})`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TitleCyan = styled(Text).attrs({
  fontSize: "h3",
  fontWeight: "bold",
})`
  color: "cyan";
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Space = styled(Text).attrs({
  height: 20, 
})`
  `;