/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Button
} from 'react-native';
import AnimatedProgress from 'react-native-reanimated-progress-bar';

const total = 5;

const colors = [
  "black",
  "yellow",
  "red",
  "green",
  "blue",
  "light-blue",
  "grey"
]

const App = () => {
  const [current, setCurrent] = useState(0);
  const [fill, setFill] = useState(colors[0]);

  const handlePress = useCallback(() => {
    if (current < total) {
      setCurrent(prev => prev +1);
      setFill(colors[current]);
    }
  },[current]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.progress}>
            <AnimatedProgress fill={fill} current={current} total={total} />
          </View>
          <Button onPress={handlePress} title="Next step" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  progress: {
    flexDirection: "row"
  }
});

export default App;
