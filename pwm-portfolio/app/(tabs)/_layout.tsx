import React from 'react';
import { View } from 'react-native'; 
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'; 

export default function TabLayout() {
  const { colors, theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Tabs
        screenOptions={{
          
          headerStyle: { 
            backgroundColor: theme === 'dark' ? colors.card : colors.primary 
          },
          headerTintColor: '#fff', 
          tabBarStyle: { 
            backgroundColor: colors.card,
            borderTopColor: colors.border,
            height: 85, 
            paddingBottom: 12, 
            paddingTop: 8,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: theme === 'dark' ? '#888' : '#999',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            headerShown: false,
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="experiência"
          options={{
            title: 'Experiência',
            tabBarIcon: ({ color }) => <Ionicons name="school" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            title: 'Projetos',
            tabBarIcon: ({ color }) => <Ionicons name="code-slash" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="jogo"
          options={{
            title: 'Game',
            headerShown: false, 
            tabBarIcon: ({ color }) => <Ionicons name="game-controller" size={24} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}