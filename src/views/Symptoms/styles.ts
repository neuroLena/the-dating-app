import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export const Tab = createMaterialTopTabNavigator();

export const Container = styled(SafeAreaView).attrs({
  edges: ["left", "right"],
})`
  flex: 1;
  padding-bottom: 50px;
  background-color: ${(props) => props.theme.colors.background};
`;



export const SymptomItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const SymptomIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const SymptomLabel = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
`;