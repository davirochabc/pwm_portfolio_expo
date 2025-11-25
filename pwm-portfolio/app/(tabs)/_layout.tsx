import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0a7ea4', // Cor do ícone ativo
        tabBarInactiveTintColor: 'gray',  // Cor do ícone inativo
        headerShown: true,                // Mostrar o título no topo do ecrã
      }}
    >
      {/* 1. HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />

      {/* 2. SOBRE */}
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
          ),
        }}
      />

      {/* 3. EXPERIÊNCIA (Agrupada) */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiência',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'briefcase' : 'briefcase-outline'} size={24} color={color} />
          ),
        }}
      />

      {/* 4. PROJETOS */}
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'code-slash' : 'code-slash-outline'} size={24} color={color} />
          ),
        }}
      />

      {/* 5. JOGO */}
      <Tabs.Screen
        name="jogo"
        options={{
          title: 'Jogo',
          headerShown: false, // Opcional: Esconder o header para o jogo ocupar o ecrã todo
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}