import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Product = {
  image: string;
  name: string;
  price: number;
};

const products: Product[] = [];

const colors = { ink: '#1E293B', muted: '#64748B', green: '#176B52', paper: '#F8FAF9', line: '#E2E8F0', white: '#FFFFFF' };

export default function CatalogueScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Catálogo</Text>
          </View>
          <View style={styles.bag}><Text style={styles.bagText}>0</Text></View>
        </View>

        {products.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}><Text style={styles.emptyIconText}>✦</Text></View>
            <Text style={styles.emptyTitle}>Aqui vai ter os produtos</Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {products.map((product, index) => (
              <View key={`${product.name}-${index}`} style={styles.productCard}>
                <Image source={{ uri: product.image }} style={styles.productImage} contentFit="cover" />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                <Pressable accessibilityRole="button" disabled style={styles.addButton}>
                  <Text style={styles.addButtonText}>Adicionar ao carrinho</Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.paper },
  content: { width: '100%', maxWidth: 900, alignSelf: 'center', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 36, flexGrow: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { color: colors.green, fontSize: 11, letterSpacing: 1.8, fontWeight: '700' },
  title: { color: colors.ink, fontSize: 32, fontWeight: '800', marginTop: 5 },
  subtitle: { color: colors.muted, fontSize: 15, marginTop: 8 },
  bag: { width: 42, height: 42, borderRadius: 15, backgroundColor: '#E7F2ED', justifyContent: 'center', alignItems: 'center' },
  bagText: { color: colors.green, fontWeight: '700', fontSize: 15 },
  emptyState: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 26, paddingVertical: 72, marginTop: 34, backgroundColor: colors.white, borderRadius: 24, borderWidth: 1, borderColor: colors.line },
  emptyIcon: { height: 58, width: 58, borderRadius: 20, backgroundColor: '#E7F2ED', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyIconText: { fontSize: 28, color: colors.green },
  emptyTitle: { color: colors.ink, fontSize: 19, fontWeight: '700', textAlign: 'center' },
  emptyDescription: { color: colors.muted, fontSize: 14, lineHeight: 21, textAlign: 'center', maxWidth: 290, marginTop: 9 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginTop: 28 },
  productCard: { flexGrow: 1, flexBasis: 220, backgroundColor: colors.white, padding: 14, borderRadius: 20, borderColor: colors.line, borderWidth: 1 },
  productImage: { height: 180, borderRadius: 14, backgroundColor: '#F1F5F3' },
  productName: { color: colors.ink, fontSize: 16, fontWeight: '600', marginTop: 13 },
  productPrice: { color: colors.green, fontSize: 16, fontWeight: '700', marginTop: 7 },
  addButton: { backgroundColor: colors.green, borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 14, opacity: 0.55 },
  addButtonText: { color: colors.white, fontWeight: '600', fontSize: 13 },
});
