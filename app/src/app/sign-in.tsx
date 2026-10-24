import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSession } from '@/ctx';

const colors = { ink: '#1E293B', muted: '#64748B', line: '#E2E8F0', green: '#176B52', paper: '#F8FAF9' };

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    signIn();
    router.replace('/catalogue');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.brandMark}><Text style={styles.brandMarkText}>B</Text></View>
        <Text style={styles.eyebrow}>BEM-VINDO À</Text>
        <Text style={styles.title}>Boa Compra</Text>
        <Text style={styles.subtitle}>Entre para descobrir produtos feitos para o seu dia.</Text>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="voce@email.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            style={styles.input}
          />
          <Text style={[styles.label, styles.passwordLabel]}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Sua senha"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            autoComplete="password"
            style={styles.input}
          />
          <Pressable accessibilityRole="button" onPress={handleSignIn} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
        <Text style={styles.footer}>Sua próxima descoberta começa aqui.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.paper },
  container: { flex: 1, width: '100%', maxWidth: 440, alignSelf: 'center', justifyContent: 'center', paddingHorizontal: 28, paddingVertical: 32 },
  brandMark: { width: 48, height: 48, borderRadius: 16, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center', marginBottom: 38 },
  brandMarkText: { color: '#FFFFFF', fontSize: 24, fontWeight: '800' },
  eyebrow: { color: colors.green, fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  title: { color: colors.ink, fontSize: 36, fontWeight: '800', marginTop: 8 },
  subtitle: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: 10, maxWidth: 320 },
  form: { marginTop: 36 },
  label: { color: colors.ink, fontSize: 14, fontWeight: '600', marginBottom: 9 },
  passwordLabel: { marginTop: 20 },
  input: { backgroundColor: '#FFFFFF', borderColor: colors.line, borderWidth: 1, borderRadius: 14, paddingHorizontal: 16, height: 54, color: colors.ink, fontSize: 16 },
  button: { height: 54, borderRadius: 14, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center', marginTop: 28 },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  pressed: { opacity: 0.85 },
  footer: { color: colors.muted, fontSize: 13, textAlign: 'center', marginTop: 30 },
});
