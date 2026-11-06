import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <>
      <Text style={styles.title}>QR Generator</Text>
      <Text style={styles.subtitle}>Turn any text or link into a QR code.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 32, fontWeight: '800', color: '#0f172a' },
  subtitle: { fontSize: 15, color: '#64748b', marginTop: 4, marginBottom: 20 },
});
