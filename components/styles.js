// styles.js

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    marginVertical: '45%',
  },
  teaLeafImage: {
    // position: 'absolute',
    top: 0,
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    // marginBottom: 0,
    paddingHorizontal: 15,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    marginTop: 10,
  },
  signupTextLink: {
    fontWeight: 'bold',
  },
});
