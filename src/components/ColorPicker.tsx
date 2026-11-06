import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

type Props = {
  selected: string;
  onSelect: (color: string) => void;
};

export default function ColorPicker({ selected, onSelect }: Props) {
  return (
    <>
      <Text style={styles.label}>Color</Text>
      <View style={styles.row}>
        {COLORS.map(c => (
          <TouchableOpacity
            key={c}
            onPress={() => onSelect(c)}
            style={[
              styles.swatch,
              { backgroundColor: c },
              selected === c && styles.selected,
            ]}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748b',
    marginTop: 24,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', gap: 12 },
  swatch: { width: 36, height: 36, borderRadius: 18 },
  selected: { borderWidth: 3, borderColor: '#cbd5e1' },
});
