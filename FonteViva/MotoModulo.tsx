import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';

interface Moto {
  placa: string;
  modelo: string;
  localizacao: string;
  observacoes: string;
}

export { Moto };

const Tab = createBottomTabNavigator();

interface MotoFormularioProps extends ParamListBase {
  onGravar: (placa: string, modelo: string, localizacao: string, observacoes: string) => void;
}

const MotoFormulario = (props: MotoFormularioProps): React.ReactElement => {
  const [placa, setPlaca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [localizacao, setLocalizacao] = useState<string>('');
  const [observacoes, setObservacoes] = useState<string>('');

  const carregar = () => {
    AsyncStorage.getItem("MOTO_OBJETO")
      .then((dados) => {
        if (dados) {
          const obj = JSON.parse(dados);
          setPlaca(obj.placa);
          setModelo(obj.modelo);
          setLocalizacao(obj.localizacao);
          setObservacoes(obj.observacoes);
          ToastAndroid.show("Moto carregada com sucesso!", ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Nenhuma moto encontrada.", ToastAndroid.LONG);
        }
      })
      .catch(() => {
        ToastAndroid.show("Erro ao carregar dados salvos de motos.", ToastAndroid.LONG);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#5C4033', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10 }}>Cadastro de Motos no Pátio</Text>

      <TextInput
        placeholder="Placa da moto"
        value={placa}
        onChangeText={setPlaca}
        style={{ backgroundColor: '#fff', width: '90%', padding: 10, borderRadius: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
        style={{ backgroundColor: '#fff', width: '90%', padding: 10, borderRadius: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Localização no pátio"
        value={localizacao}
        onChangeText={setLocalizacao}
        style={{ backgroundColor: '#fff', width: '90%', padding: 10, borderRadius: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        style={{ backgroundColor: '#fff', width: '90%', padding: 10, borderRadius: 8, marginBottom: 10 }}
      />

      <View>
        <Button title="Salvar"  color="#6b7850" onPress={() => {
          props.onGravar(placa, modelo, localizacao, observacoes);
        }} />
      </View>
    </View>
  );
};

interface MotoListagemProps extends ParamListBase {
  lista: Moto[];
}

const MotoListagem = (props: MotoListagemProps): React.ReactElement => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#5C4033' }}>
      <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10 }}>Listagem de Motos</Text>
      <FlatList
        data={props.lista}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ marginBottom: 10, backgroundColor: '#FFD700', padding: 10, borderRadius: 8 }}>
              <Text>Placa: {item.placa}</Text>
              <Text>Modelo: {item.modelo}</Text>
              <Text>Localização: {item.localizacao}</Text>
              <Text>Observações: {item.observacoes}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const MotoModulo = (): React.ReactElement => {
  const [listaMotos, setListaMotos] = useState<Moto[]>([]);

  const inserir = (placa: string, modelo: string, localizacao: string, observacoes: string) => {
    const objeto: Moto = { placa, modelo, localizacao, observacoes };
    setListaMotos((listaMotosAntiga: Moto[]) => {
      const novaListaMotos = [...listaMotosAntiga, objeto];
      const strListaMotos = JSON.stringify(novaListaMotos);
      AsyncStorage.setItem("MOTO_OBJETO", strListaMotos)
        .then(() => {
          ToastAndroid.show("Moto cadastrada com sucesso!", ToastAndroid.LONG);
        })
        .catch(() => {
          ToastAndroid.show("Ocorreu um erro ao salvar a moto.", ToastAndroid.LONG);
        });
      return novaListaMotos;
    });
  };

  useEffect(() => {
    AsyncStorage.getItem("MOTO_OBJETO")
      .then((strListaMotos: string | null) => {
        if (strListaMotos != null) {
          const novaListaMotos = JSON.parse(strListaMotos);
          setListaMotos(novaListaMotos);
          ToastAndroid.show(`Há ${novaListaMotos.length} motos cadastradas.`, ToastAndroid.LONG);
        }
      })
      .catch(() => {
        ToastAndroid.show("Erro ao carregar lista de motos.", ToastAndroid.LONG);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro">
          {(navProps: ParamListBase) => <MotoFormulario {...navProps} onGravar={inserir} />}
        </Tab.Screen>
        <Tab.Screen name="Motos">
          {(navProps: ParamListBase) => <MotoListagem {...navProps} lista={listaMotos} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export { MotoModulo };
