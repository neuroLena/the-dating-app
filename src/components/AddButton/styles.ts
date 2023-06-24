import styled, { css } from "styled-components/native";
import Text from "~components/Text";
import { TouchableOpacityProps } from "react-native";

interface VariantProps {
  variant?: "outline" | "default";
}
export interface ContainerProps extends VariantProps, TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  overflow: hidden;

  height: 68px;
  width: 100px;

  border-radius: 30px;
  border: 3px ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.variant !== "outline" &&
    css`
      background-color: ${props.theme.colors.primary};
    `}
`;

export const ButtonText = styled(Text)<VariantProps>`
  color: ${(props) =>
    props.variant === "outline" ? props.theme.colors.primary : "white"};
  font-size: 30px;
  line-height: 50px;
  text-align: center;
`;
