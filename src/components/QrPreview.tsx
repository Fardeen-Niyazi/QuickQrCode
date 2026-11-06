import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { QR_SIZE } from '../constants';

type Props = {
  value: string;
  color: string;
  qrRef: React.MutableRefObject<any>;
};

export default function QrPreview({ value, color, qrRef }: Props) {
  return (
    <View style={styles.card}>
      {value ? (
        <QRCode
          value={value}
          size={QR_SIZE}
          color={color}
          backgroundColor="#ffffff"
          quietZone={12}
          getRef={c => (qrRef.current = c)}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderIcon}>▦</Text>
          <Text style={styles.placeholderText}>
            Your QR code will appear here
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginTop: 24,
    padding: 16,
    borderRadius: 24,
    backgroundColor: '#fff',
    minWidth: QR_SIZE + 56,
    minHeight: QR_SIZE + 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  placeholder: { alignItems: 'center' },
  placeholderIcon: { fontSize: 64, color: '#cbd5e1' },
  placeholderText: { marginTop: 8, color: '#94a3b8', fontSize: 14 },
});
