import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShareButton from './src/components/ShareButton';
import Header from './src/components/Header';
import InputCard from './src/components/InputCard';
import QrPreview from './src/components/QrPreview';
import ColorPicker from './src/components/ColorPicker';
import { COLORS } from './src/constants';
import { useQrShare } from './src/hooks/useQrShare';

export default function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const { qrRef, sharing, shareQr } = useQrShare();

  const value = text.trim();
  const hasValue = value.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Header />
          <InputCard value={text} onChange={setText} />
          <QrPreview value={value} color={color} qrRef={qrRef} />
          <ColorPicker selected={color} onSelect={setColor} />
          <ShareButton
            onPress={shareQr}
            disabled={!hasValue}
            loading={sharing}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 40 },
});
