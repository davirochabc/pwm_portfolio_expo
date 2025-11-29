import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const WORDS = ["REACT","TYPESCRIPT","JOGO","PROGRAMAR","DESAFIO","COMPONENTE","ESTADO","PROPRIEDADE","FUNCAO","VARIAVEL","OBJETO","ARRAY","STRING","NUMERO","BOOLEANO","NAVEGADOR","SERVIDOR","PACOTE","BIBLIOTECA","FRAMEWORK",];
const MAX_ERRORS = 6;

export default function GameScreen() {
  const { colors } = useTheme();
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  function startNewGame() {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setErrors(0);
  }

  function handleGuess(letter: string) {
    if (guessedLetters.includes(letter) || errors >= MAX_ERRORS || isWinner) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setErrors((prev) => prev + 1);
    }
  }

  const isWinner = word.split('').every((char) => guessedLetters.includes(char));
  const isLoser = errors >= MAX_ERRORS;

  const renderWord = () => (
    <View style={styles.wordContainer}>
      {word.split('').map((char, index) => (
        <Text 
          key={index} 
          style={[
            styles.char, 
            { color: colors.primary }, 
            !guessedLetters.includes(char) && !isLoser && { color: colors.border }
          ]}
        >
          {guessedLetters.includes(char) || isLoser ? char : '_'}
        </Text>
      ))}
    </View>
  );

  const renderKeyboard = () => {
    const keys = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    return (
      <View style={styles.keyboard}>
        {keys.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = word.includes(letter);
          
          let bgColor = colors.card; 
          if (isGuessed) {
            bgColor = isCorrect ? colors.success : colors.danger;
          }

          return (
            <TouchableOpacity
              key={letter}
              style={[
                styles.key, 
                { backgroundColor: bgColor }, 
                (isGuessed || isWinner || isLoser) && styles.keyDisabled
              ]}
              onPress={() => handleGuess(letter)}
              disabled={isGuessed || isWinner || isLoser}
            >
              <Text style={[styles.keyText, { color: isGuessed ? '#fff' : colors.text }]}>{letter}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Jogo da Forca</Text>

      <View style={styles.hangmanContainer}>
         <Ionicons name="skull-outline" size={50} color={errors > 0 ? colors.danger : colors.text} />
         <Text style={[styles.errorText, { color: colors.text }]}>Erros: {errors} / {MAX_ERRORS}</Text>
      </View>

      {renderWord()}

      {(isWinner || isLoser) && (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultText, { color: isWinner ? colors.success : colors.danger }]}>
            {isWinner ? 'VOCÊ VENCEU! 🎉' : 'GAME OVER 💀'}
          </Text>
          <TouchableOpacity style={[styles.restartButton, { backgroundColor: colors.primary }]} onPress={startNewGame}>
            <Text style={styles.restartButtonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {renderKeyboard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, marginTop: 30 },
  hangmanContainer: { alignItems: 'center', marginBottom: 20 },
  errorText: { fontSize: 18, marginTop: 5 },
  wordContainer: { flexDirection: 'row', marginBottom: 30, flexWrap: 'wrap', justifyContent: 'center' },
  char: { fontSize: 32, fontWeight: 'bold', marginHorizontal: 5, minWidth: 20, textAlign: 'center' },
  keyboard: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6, maxWidth: 350 },
  key: { width: 36, height: 42, borderRadius: 4, justifyContent: 'center', alignItems: 'center', elevation: 2 },
  keyDisabled: { opacity: 0.6 },
  keyText: { fontSize: 16, fontWeight: 'bold' },
  resultContainer: { alignItems: 'center', marginVertical: 20 },
  resultText: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  restartButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  restartButtonText: { color: '#fff', fontWeight: 'bold' }
});