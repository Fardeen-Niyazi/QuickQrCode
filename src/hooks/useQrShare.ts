import { useRef, useState, useCallback } from 'react';
import { Alert, Keyboard } from 'react-native';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';

export function useQrShare() {
  const qrRef = useRef<any>(null);
  const [sharing, setSharing] = useState(false);

  const shareQr = useCallback(() => {
    if (!qrRef.current) return;
    Keyboard.dismiss();
    setSharing(true);

    qrRef.current.toDataURL(async (base64: string) => {
      try {
        const path = `${RNFS.CachesDirectoryPath}/qr-${Date.now()}.png`;
        await RNFS.writeFile(path, base64, 'base64');
        await Share.open({
          url: `file://${path}`,
          type: 'image/png',
          title: 'Share QR code',
          failOnCancel: false,
        });
      } catch (e: any) {
        console.log('Share error:', e);
        Alert.alert('Could not share', String(e?.message ?? e));
      } finally {
        setSharing(false);
      }
    });
  }, []);

  return { qrRef, sharing, shareQr };
}
