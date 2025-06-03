import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

export const Sobre = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>

      <Text style={styles.text}>
        O aplicativo <Text style={styles.bold}>Mapeamento de Motos no Pátio</Text> foi desenvolvido com foco acadêmico, para demonstrar o uso de tecnologias móveis na organização e monitoramento de veículos.
      </Text>

      <Text style={styles.text}>
        Ele permite o registro, visualização e armazenamento local de informações de motos que se encontram em pátios de empresas ou órgãos públicos, promovendo mais controle e agilidade no processo.
      </Text>

      <Text style={styles.sectionTitle}>👨‍💻 Desenvolvedor</Text>
      <Text style={styles.text}>
        Este app foi criado por um estudante do curso de <Text style={styles.bold}>Análise e Desenvolvimento de Sistemas</Text>, como parte de um projeto prático da disciplina de Desenvolvimento Mobile.
      </Text>

      <Text style={styles.sectionTitle}>📚 Tecnologias Utilizadas</Text>
      <Text style={styles.text}>
        - React Native com Expo{'\n'}
        - TypeScript{'\n'}
        - AsyncStorage para armazenamento local{'\n'}
        - React Navigation para rotas
      </Text>

      <Text style={styles.sectionTitle}>📩 Contato</Text>
      <Text style={styles.text}>
        Para mais informações ou sugestões, entre em contato:
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:seuemail@email.com')}>
        <Text style={styles.link}>seuemail@email.com</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Versão 1.0 • 2025</Text>
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
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#4169E1',
    marginBottom: 12,
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
  },
});
