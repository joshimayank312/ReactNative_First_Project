// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Linking,
// } from 'react-native';

// // const WelcomeScreen = ({route}) => {
// //   const {name} = route.params; // Get the name passed from Login screen

// //   return (
// //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //       <Text>Welcome {name}</Text>
// //     </View>
// //   );
// // };

// const WelcomeScreen = () => {
//   return (
//     <view>
//       <text>Welcome Mj!</text>
//     </view>
//   );
// };
// export default WelcomeScreen;

// WelcomeScreen.js

import React from 'react';
import {View, Text} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 20}}>Welcome Anuuu...!</Text>
    </View>
  );
};

export default WelcomeScreen;
