import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="6" onPress={() => onChangeTime(0.1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="12" onPress={() => onChangeTime(0.2)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="30" onPress={() => onChangeTime(0.5)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
