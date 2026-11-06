import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function ShareButton({ onPress, disabled, loading }: Props) {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      style={[styles.btn, isDisabled && styles.btnDisabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{loading ? 'Preparing...' : 'Share as image'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 28,
    backgroundColor: '#6366f1',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnDisabled: { backgroundColor: '#c7d2fe' },
  text: { color: '#fff', fontSize: 17, fontWeight: '700' },
});
