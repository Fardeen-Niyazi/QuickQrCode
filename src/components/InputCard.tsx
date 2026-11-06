import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MAX_LENGTH } from '../constants';

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function InputCard({ value, onChange }: Props) {
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Paste a URL or type some text"
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChange}
        multiline
        maxLength={MAX_LENGTH}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.footer}>
        <Text style={styles.counter}>
          {value.length}/{MAX_LENGTH}
        </Text>
        {value.length > 0 && (
          <TouchableOpacity onPress={() => onChange('')}>
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  input: {
    minHeight: 70,
    maxHeight: 140,
    fontSize: 16,
    color: '#0f172a',
    textAlignVertical: 'top',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  counter: { fontSize: 12, color: '#94a3b8' },
  clear: { fontSize: 13, fontWeight: '600', color: '#6366f1' },
});
