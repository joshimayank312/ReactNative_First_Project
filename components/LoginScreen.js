import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [name, setName] = useState(''); // State variable to store the entered name

  const handleLogin = () => {
    // Perform login logic here
    // For now, just display the welcome message with the entered name
    alert(`Welcome ${name}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./tea-leaf-image.png')}
        style={styles.teaLeafImage}
        resizeMode="contain"
        accessibilityLabel="Tea Leaf Image"
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          accessibilityLabel="Email Input"
          accessibilityHint="Enter your email address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          accessibilityLabel="Password Input"
          accessibilityHint="Enter your password"
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin} // Call handleLogin function when login button is pressed
          accessibilityLabel="Login Button">
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>
        Don't have an account yet?{' '}
        <Text style={styles.signupTextLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
