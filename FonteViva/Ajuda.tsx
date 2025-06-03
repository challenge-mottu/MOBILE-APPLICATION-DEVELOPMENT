import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const Ajuda = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ajuda e Instruções</Text>
      <Text style={styles.text}>
        Bem-vindo ao sistema de Cadastro e Mapeamento de Motos no Pátio!
      </Text>

      <Text style={styles.subtitle}>📋 Cadastro</Text>
      <Text style={styles.text}>
        - Acesse a aba "Cadastro e Listagem de Motos".{'\n'}
        - Preencha os campos: Placa, Modelo, Localização e Observações.{'\n'}
        - Toque em **Salvar** para registrar a moto localmente.

      </Text>

      <Text style={styles.subtitle}>📂 Consulta</Text>
      <Text style={styles.text}>
        - A última moto salva pode ser carregada com o botão "Carregar Última Moto".{'\n'}
        - A listagem será exibida abaixo do formulário.

      </Text>

      <Text style={styles.subtitle}>🔄 Armazenamento Local</Text>
      <Text style={styles.text}>
        - Os dados são salvos localmente no dispositivo utilizando AsyncStorage.{'\n'}
        - Ideal para protótipos e testes offline.

      </Text>

      <Text style={styles.textSmall}>Para dúvidas técnicas, entre em contato com o suporte do sistema.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E4C42',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginTop: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 22,
  },
  textSmall: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
});
