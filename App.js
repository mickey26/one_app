import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LandingPage from './src/LandingPage';
import Footer from './src/footer/Footer';

function App() {
  return (
    <View style={styles.body}>
      <ScrollView>
        <View>
          <LandingPage />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export default App;
