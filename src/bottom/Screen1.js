import {View, Text} from 'react-native';
import React from 'react';

const Screen1 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        Open Side Drawer
      </Text>
    </View>
  );
};

export default Screen1;
