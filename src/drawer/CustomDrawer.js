import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';
const data = [
  {
    title: 'Starred',
    icon: require('../star.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Snoozed',
    icon: require('../snooze.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Important',
    icon: require('../checkbox.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Sent',
    icon: require('../send.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Scheduled',
    icon: require('../checkbox.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Outbox',
    icon: require('../checkbox.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Drafts',
    icon: require('../checkbox.png'),
    isNew: false,
    count: 2,
  },
  {
    title: 'Archieved',
    icon: require('../checkbox.png'),
    isNew: false,
    count: 2,
  },
];
const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text
          style={{
            color: 'red',
            fontSize: 27,
            fontWeight: '700',
            marginLeft: 20,
          }}>
          Gmail
        </Text>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            height: 70,
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            borderBottomColor: '#C7C7C7',
            borderTopColor: '#C7C7C7',
          }}>
          <CommonCard
            icon={require('../checkbox.png')}
            count={''}
            title={'All Inboxes'}
            onClick={() => {
              navigation.closeDrawer();
            }}
          />
        </View>
        <CommonCard
          icon={require('../checkbox.png')}
          count={'10+'}
          bgColor={'#FFE4E4'}
          title={'Primary'}
          onClick={() => {
            navigation.closeDrawer();
          }}
        />
        <CommonCard
          icon={require('../checkbox.png')}
          count={'10+'}
          newColor={'green'}
          isNew={true}
          title={'Social'}
          onClick={() => {
            navigation.closeDrawer();
          }}
        />
        <CommonCard
          icon={require('../checkbox.png')}
          count={'10+'}
          newColor={'blue'}
          isNew={true}
          title={'Promotions'}
          onClick={() => {
            navigation.closeDrawer();
           
           
          }}
        />
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: '700',
            color: '#8e8e8e',
          }}>
          ALL LABELS
        </Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <CommonCard
                title={item.title}
                icon={item.icon}
                count={item.count + '+'}
                onClick={() => {
                  navigation.closeDrawer();
                  alert('title :' + item.title);
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
