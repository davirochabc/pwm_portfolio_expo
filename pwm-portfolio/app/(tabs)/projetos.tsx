import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking, Alert } from 'react-native';
import { PROJECTS } from '../../constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  link?: string;
}

export default function ProjectsScreen() {
  const { colors } = useTheme();

  const handlePress = async (url?: string) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", `Não foi possível abrir este link: ${url}`);
      }
    } else {
      Alert.alert("Ops!", "Este projeto ainda não possui um link disponível.");
    }
  };
  
  const renderItem = ({ item }: { item: Project }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: colors.card }]}
      onPress={() => handlePress(item.link)} 
      activeOpacity={0.7} 
    >
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Ionicons name="logo-github" size={24} color={colors.primary} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
        </View>
        {item.link && (
          <Ionicons name="open-outline" size={20} color={colors.icon} />
        )}
      </View>
      
      <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
      
      <View style={styles.techContainer}>
        {item.techs.map((tech, index) => (
          <Text key={index} style={[styles.tech, { backgroundColor: colors.background, color: colors.primary }]}>
            {tech}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList 
        data={PROJECTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={[styles.headerTitle, { color: colors.text }]}>Meus Trabalhos</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContent: { padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    borderRadius: 12, padding: 16, marginBottom: 16,
    elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  description: { fontSize: 15, lineHeight: 20, marginBottom: 12 },
  techContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 5 },
  tech: { fontSize: 12, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, overflow: 'hidden' },
});