import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MotoModulo } from './MotoModulo';
import { Resumo } from './Resumo';
import { Sobre } from './Sobre';
import { Ajuda } from './Ajuda';

const { Screen, Navigator } = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#3E4C42',
            },
            headerStyle: {
              backgroundColor: '#6B8E23',
            },
            headerTintColor: '#fff',
            drawerActiveTintColor: '#A8C686', 
            drawerInactiveTintColor: '#fff',
            headerTitleAlign: 'center',
            drawerLabelStyle: {
              fontSize: 16,
            },
          }}
        >
          <Screen
            name="Cadastro e Listagem de Motos"
            options={{ title: 'Motos no Pátio' }}
          >
            {(navProps) => <MotoModulo {...navProps} />}
          </Screen>
          <Screen name="Resumo">{(navProps) => <Resumo {...navProps} />}</Screen>
          <Screen name="Sobre">{(navProps) => <Sobre {...navProps} />}</Screen>
          <Screen name="Ajuda">{(navProps) => <Ajuda {...navProps} />}</Screen>
        </Navigator>
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B39C4D', 
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});