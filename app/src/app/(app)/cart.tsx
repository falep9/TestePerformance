import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = { ink: '#1E293B', muted: '#64748B', green: '#176B52', paper: '#F8FAF9', line: '#E2E8F0', white: '#FFFFFF' };

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>Carrinho</Text>
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}><Text style={styles.emptyIconText}>＋</Text></View>
          <Text style={styles.emptyTitle}>Seu carrinho está vazio</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.paper },
  content: { width: '100%', maxWidth: 900, alignSelf: 'center', paddingHorizontal: 24, paddingTop: 16, flex: 1 },
  eyebrow: { color: colors.green, fontSize: 11, letterSpacing: 1.8, fontWeight: '700' },
  title: { color: colors.ink, fontSize: 32, fontWeight: '800', marginTop: 5 },
  emptyState: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 26, paddingVertical: 72, marginTop: 34, backgroundColor: colors.white, borderRadius: 24, borderWidth: 1, borderColor: colors.line },
  emptyIcon: { height: 58, width: 58, borderRadius: 20, backgroundColor: '#E7F2ED', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyIconText: { fontSize: 27, color: colors.green },
  emptyTitle: { color: colors.ink, fontSize: 19, fontWeight: '700', textAlign: 'center' },
  emptyDescription: { color: colors.muted, fontSize: 14, lineHeight: 21, textAlign: 'center', maxWidth: 290, marginTop: 9 },
});
