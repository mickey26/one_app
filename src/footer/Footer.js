import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Footer() {
  const footerList = ['Home', 'Notes', 'Profile'];
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerElement}>
        {footerList &&
          footerList.map((data, index) => (
            <Text style={styles.fields} key={index}>
              {data}
            </Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    borderWidth: 0.5,

    height: 50,
    alignItems: 'center',
    backgroundColor: '#5B96A8',
    flex: 1,
    paddingTop: 8,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerElement: {
    flexDirection: 'row',
  },
  fields: {
    flexWrap: 'wrap-reverse',
    alignContent: 'space-between',
  },
});

export default Footer;
