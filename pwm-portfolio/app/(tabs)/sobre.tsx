import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { ABOUT } from '../../constants/data'; 
import { useTheme } from '../../context/ThemeContext';

export default function AboutScreen() {
  const { colors } = useTheme();


  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      contentContainerStyle={styles.content}
    >
      

      <Text style={[styles.sectionTitle, { color: colors.text }]}>Quem sou eu</Text>
      <Text style={[styles.text, { color: colors.text }]}>{ABOUT.description}</Text>

      <View style={[styles.separator, { backgroundColor: colors.border }]} />

      <Text style={[styles.sectionTitle, { color: colors.text }]}>Tecnologias deste App</Text>
      <Text style={[styles.subText, { color: colors.icon }]}>
        Para desenvolver este portfólio mobile, utilizei a seguinte stack:
      </Text>

      <View style={styles.techContainer}>
        {ABOUT.appTechs.map((tech, index) => (
          <View key={index} style={[styles.techBadge, { borderColor: colors.primary, backgroundColor: colors.card }]}>
            <Text style={[styles.techText, { color: colors.primary }]}>{tech}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }, // Fundo removido
  content: { padding: 20 },
  imageContainer: { alignItems: 'center', marginBottom: 20, marginTop: 10 },
  profileImage: {
    width: 120, height: 120, borderRadius: 60, borderWidth: 3,
  },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, marginTop: 10 },
  text: { fontSize: 16, lineHeight: 24, textAlign: 'justify' },
  subText: { fontSize: 14, marginBottom: 15 },
  separator: { height: 1, marginVertical: 20 },
  techContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  techBadge: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, borderWidth: 1 },
  techText: { fontWeight: '600' },
});