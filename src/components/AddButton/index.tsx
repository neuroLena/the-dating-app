import React from "react";
// import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // You may need to install it if you haven't already done so
import { 
  Container, 
  ContainerProps,
  ButtonText 
} from "./styles";
import Loading from "~components/Loading";



const AddButton: React.FC<ContainerProps> = (props) => {
  const enabled = !props.loading && !props.disabled;

  return (
    <Container
      activeOpacity={enabled ? 0.7 : 1}
      disabled={!enabled}
      onPress={enabled ? props.onPress : null}
      {...props}
    >
      {/* <ButtonText>Text</ButtonText> */}
      {props.loading && <Loading />}
      {!props.loading && (
        
        <Icon name="add" size={24} color="white" />
      )}
    </Container>
  );
};

export default AddButton;
