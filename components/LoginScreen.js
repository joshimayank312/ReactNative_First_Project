// // LoginScreen.js

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Linking,
//   Alert,
// } from 'react-native';
// import styles from './styles'; // Import the external stylesheet

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Validate email using regex
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address');
//       return;
//     }

//     // Validate password using regex
//     const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,15}$/;
//     if (!passwordPattern.test(password)) {
//       Alert.alert(
//         'Invalid Password',
//         'Password must meet the following criteria:\n\n' +
//           '- At least one special character\n' +
//           '- At least one capital letter\n' +
//           '- At least one number/digit\n' +
//           '- Length between 8 and 15 characters',
//       );
//       return;
//     }

//     // Perform login logic here
//     // For now, just display an alert
//     Alert.alert('Login Success', 'Welcome');
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./tea-leaf-image.png')} // Replace with your own image
//         style={styles.teaLeafImage}
//         resizeMode="contain" // Ensure the image fits well
//         accessibilityLabel="Tea Leaf Image"
//       />
//       <View style={styles.formContainer}>
//         <TextInput
//           textContentType="emailAddress"
//           style={styles.input}
//           placeholder="Email Id"
//           placeholderTextColor="green"
//           keyboardType="email-address"
//           accessibilityLabel="Email Input"
//           accessibilityHint="Enter your email address"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="green"
//           secureTextEntry
//           accessibilityLabel="Password Input"
//           accessibilityHint="Enter your password"
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           style={styles.loginButton}
//           accessibilityLabel="Login Button"
//           onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.signupText}>
//         Don't have an account yet?{' '}
//         <Text
//           style={styles.signupTextLink}
//           onPress={() => Linking.openURL('./WelcomeScreen.js')}>
//           Sign Up
//         </Text>
//       </Text>
//     </View>
//   );
// };

// export default LoginScreen;

// LoginScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import navigation hook
import styles from './styles'; // Import the external stylesheet

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = () => {
    // Mock login logic for demonstration purposes
    if (email === 'joshimayankh312@gmail.com' && password === 'Test@12345') {
      // Navigate to WelcomeScreen
      navigation.navigate('Welcome');
    } else {
      // Show error message
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry
          accessibilityLabel="Password Input"
          accessibilityHint="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.loginButton}
          accessibilityLabel="Login Button"
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
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
