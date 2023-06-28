import React, { useState } from 'react';
import { Button, Text, TextInput, View ,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SMTPMailer from 'react-native-smtp-mailer';
import Input from '../../../components/Input'
const SuggestImprovementView = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState('');

  const submitSuggestion = async () => {
    await SMTPMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      username: 'mentalfriendtest@gmail.com',
      password: 'TestTest123',
     
      recipients: 'lena.egor@gmail.com',
      subject: `Suggestion from ${title}`,
      htmlBody: `<h1>${title}</h1><p>Category: ${category}</p><p>${content}</p>`,
    })
      .then(() => console.log('Email sent successfully'))
      .catch((error) => console.log('Could not send email:', error));
  };

  return (
    <View>
    <Text style={styles.title}>Choose Category</Text>
    <RNPickerSelect
      style={{
        inputIOS: styles.input,
        inputAndroid: styles.input,
      }}
      onValueChange={(value) => setCategory(value)}
      items={[
        { label: 'Category 1', value: 'category1' },
        { label: 'Category 2', value: 'category2' },
        // Add more categories here
      ]}
    />

  <Text style={styles.title}>Suggestion</Text>
  <TextInput style={styles.input} value={content} onChangeText={setContent} multiline />


    <Button title="Submit" onPress={submitSuggestion} />
  </View>
  );
};


// flex: 1;
// color: ${(props) => props.theme.colors.text};
// font-family: ${(props) => props.theme.typography.fontFamily.medium};
// font-size: ${(props) => props.theme.typography.sizes.small.size}px;
// padding-left: 10px;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 3.84,
    // elevation: 1,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default SuggestImprovementView;
