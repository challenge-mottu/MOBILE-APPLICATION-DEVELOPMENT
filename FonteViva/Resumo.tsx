import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const Resumo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resumo do Projeto</Text>

      <Text style={styles.sectionTitle}>📌 Objetivo</Text>
      <Text style={styles.text}>
        Este aplicativo tem como objetivo facilitar o **mapeamento e controle de motos em pátios** de empresas, concessionárias ou órgãos de transporte, oferecendo uma interface simples para cadastro e consulta rápida.
      </Text>

      <Text style={styles.sectionTitle}>⚙️ Funcionalidades</Text>
      <Text style={styles.text}>
        - Cadastro de motos com informações detalhadas{'\n'}
        - Armazenamento local dos dados (AsyncStorage){'\n'}
        - Navegação entre telas com React Navigation{'\n'}
        - Interface desenvolvida com React Native e estilização customizada
      </Text>

      <Text style={styles.sectionTitle}>🚀 Tecnologias Utilizadas</Text>
      <Text style={styles.text}>
        - React Native (Expo){'\n'}
        - TypeScript{'\n'}
        - AsyncStorage{'\n'}
        - React Navigation
      </Text>

      <Text style={styles.sectionTitle}>📱 Público-alvo</Text>
      <Text style={styles.text}>
        Empresas que desejam digitalizar o processo de controle e localização de veículos em pátios, reduzindo erros e aumentando a eficiência.
      </Text>

      <Text style={styles.footer}>Versão 1.0 • Desenvolvido para fins acadêmicos</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  footer: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
  },
});
