import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Define que o grupo (tabs) é o ecrã principal e esconde o header duplicado */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}