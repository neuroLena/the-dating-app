import React, { useState } from 'react';
import { Button, Text, TextInput, View ,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SMTPMailer from 'react-native-smtp-mailer';

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
    <Text style={styles.title}>Title</Text>
    <TextInput style={styles.input} value={title} onChangeText={setTitle} />

    <Text style={styles.title}>Category</Text>
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



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
});

export default SuggestImprovementView;
