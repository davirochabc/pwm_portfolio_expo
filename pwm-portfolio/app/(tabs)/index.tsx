import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { PROFILE } from '../../constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'; 

export default function HomeScreen() {
  const router = useRouter();
  const { theme, toggleTheme, colors } = useTheme(); 

  const avatarSource = typeof PROFILE.avatar === 'string' 
    ? { uri: PROFILE.avatar } 
    : PROFILE.avatar;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={styles.themeToggle}>
        <Ionicons name={theme === 'dark' ? "moon" : "sunny"} size={20} color={colors.text} style={{marginRight: 8}}/>
        <Switch 
          value={theme === 'dark'} 
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: colors.primary }}
          thumbColor={"#f4f3f4"}
        />
      </View>

      <View style={styles.content}>
        <Image 
          source={avatarSource} 
          style={[styles.avatar, { borderColor: colors.primary }]}
        />

        <Text style={[styles.title, { color: colors.text }]}>{PROFILE.name}</Text>
        <Text style={[styles.role, { color: colors.primary }]}>{PROFILE.role}</Text>
        <Text style={[styles.description, { color: colors.icon }]}>{PROFILE.description}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors.primary }]} 
            onPress={() => router.push('/projetos')}
          >
            <Ionicons name="folder-open-outline" size={20} color="#fff" style={styles.btnIcon} />
            <Text style={styles.buttonText}>Projetos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors.primary }]} 
            onPress={() => router.push('/jogo')}
          >
            <Ionicons name="game-controller-outline" size={20} color="#fff" style={styles.btnIcon} />
            <Text style={styles.buttonText}>Jogar Forca</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: { padding: 20, alignItems: 'center', width: '100%' },
  themeToggle: { position: 'absolute', top: 50, right: 20, flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    borderWidth: 4,
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
  role: { fontSize: 18, marginBottom: 15, fontWeight: '600' },
  description: { textAlign: 'center', marginBottom: 30, fontSize: 16, lineHeight: 22 },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  button: { 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  btnIcon: { marginRight: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});