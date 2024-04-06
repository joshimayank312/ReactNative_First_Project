// styles.js

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Change the background color to white
  },
  teaLeafImage: {
    top: 0,
    width: 150,
    height: 150,
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
    paddingHorizontal: 15,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 25,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    color: 'black',
    marginTop: 10,
  },
  signupTextLink: {
    fontWeight: 'bold',
  },
});
