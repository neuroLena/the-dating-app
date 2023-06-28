import React, { useState } from 'react';
import NeumorphicButton from './NeuButton';
import NeumorphicView from './NeuView';
import NeuText from './NeuText';

const NeuAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NeumorphicView>
      <NeumorphicButton onPress={handlePress}>
        <NeuText>{title}</NeuText>
      </NeumorphicButton>
      {isOpen && children}
    </NeumorphicView>
  );
};

export default NeuAccordion;
