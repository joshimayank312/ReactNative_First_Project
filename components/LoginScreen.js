// LoginScreen.js

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import styles from './styles'; // Import the external stylesheet

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./tea-leaf-image.png')} // Replace with your own image
        style={styles.teaLeafImage}
        resizeMode="contain" // Ensure the image fits well
        accessibilityLabel="Tea Leaf Image"
      />
      <View style={styles.formContainer}>
        <TextInput
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Email Id"
          placeholderTextColor="green"
          keyboardType="email-address"
          accessibilityLabel="Email Input"
          accessibilityHint="Enter your email address"
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry
          accessibilityLabel="Password Input"
          accessibilityHint="Enter your password"
          required
        />
        <TouchableOpacity
          style={styles.loginButton}
          accessibilityLabel="Login Button">
          <Text
            style={styles.loginButtonText}
            onPress={() => Linking.openURL('http://google.com')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>
        Don't have an account yet?{' '}
        <Text
          style={styles.signupTextLink}
          onPress={() => Linking.openURL('./WelcomeScreen.js')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
