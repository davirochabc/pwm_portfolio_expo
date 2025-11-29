import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ACADEMIC, PROFESSIONAL } from '../../constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function ExperienceScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      
      {/* Seção Profissional */}
      <View style={styles.sectionHeader}>
        <Ionicons name="briefcase" size={24} color={colors.primary} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Experiência Profissional</Text>
      </View>

      {PROFESSIONAL.map((item) => (
        <View key={item.id} style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.role, { color: colors.text }]}>{item.role}</Text>
          <Text style={[styles.institution, { color: colors.primary }]}>{item.company}</Text>
          <Text style={[styles.period, { color: colors.icon }]}>{item.period}</Text>
          <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
        </View>
      ))}

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* Seção Acadêmica */}
      <View style={styles.sectionHeader}>
        <Ionicons name="school" size={24} color={colors.primary} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Experiência Acadêmica</Text>
      </View>

      {ACADEMIC.map((item) => (
        <View key={item.id} style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.role, { color: colors.text }]}>{item.course}</Text>
          <Text style={[styles.institution, { color: colors.primary }]}>{item.institution}</Text>
          <Text style={[styles.period, { color: colors.icon }]}>{item.period}</Text>
          <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
        </View>
      ))}

      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 }, 
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 },
  card: {
    padding: 15, borderRadius: 10, marginBottom: 15,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }
  },
  role: { fontSize: 18, fontWeight: 'bold' },
  institution: { fontSize: 16, marginTop: 2, fontWeight: '600' },
  period: { fontSize: 14, marginTop: 5, fontStyle: 'italic' },
  description: { fontSize: 15, marginTop: 10, lineHeight: 20 },
  divider: { height: 1, marginVertical: 10 },
});