import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Seção de Boas-vindas */}
      <View style={styles.header}>
        {/* Se tiver uma foto sua em assets/images/perfil.png, use-a aqui. 
            Caso contrário, use um ícone ou deixe sem imagem por enquanto. */}
        <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>Seu Nome</Text>
        </View>
        
        <Text style={styles.title}>Olá! Bem-vindo ao meu Portfólio.</Text>
        <Text style={styles.subtitle}>
          Desenvolvedor Mobile | React Native & Expo
        </Text>
      </View>

      {/* Resumo ou Chamada para Ação */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Aqui você encontrará meus projetos, experiências e um pouco sobre mim.
          Navegue pelas abas abaixo para explorar.
        </Text>

        {/* Exemplo de botão/link interno se precisar */}
        <Link href="/projetos" style={styles.linkButton}>
          <Text style={styles.linkText}>Ver Meus Projetos</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  linkButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden', // Necessário para borderRadius funcionar em Text no iOS às vezes
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});