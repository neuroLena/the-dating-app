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



export const MedicationItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const MedicationIcon = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const MedicationLabel = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
`;