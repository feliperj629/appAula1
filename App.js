//Comentar cada linha de código para entender o que cada parte faz
//Importação de componentes do React Native
import { StatusBar } from 'expo-status-bar';
//Importação de componentes do React Native
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
//StyleSheet é um objeto que contém os estilos do componente App
//Text é um componente que exibe texto
//View é um componente que exibe uma visualização
//Image é um componente que exibe uma imagem
//TextInput é um componente que exibe um campo de texto
//TouchableOpacity é um componente que exibe um botão
//StatusBar é um componente que exibe a barra de status

//Função principal do componente App
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro projeto React Native!</Text>
      <Image source={require('./assets/logo_estacio.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

//Estilos do componente App
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Ocupa todo o espaço disponível da tela (flexbox)
    backgroundColor: '#fff',     // Define a cor de fundo como branco
    alignItems: 'center',       // Centraliza os itens horizontalmente
    justifyContent: 'center',   // Centraliza os itens verticalmente
    padding: 20,                // Adiciona espaçamento interno de 20 pixels em todos os lados
  },
  title: {
    fontSize: 24,               // Define o tamanho da fonte como 24 pixels
    fontWeight: 'bold',         // Define o peso da fonte como negrito
    color: '#000',              // Define a cor do texto como preto
  },
  image: {
    width: 100,                 // Define a largura da imagem como 100 pixels
    height: 100,                // Define a altura da imagem como 100 pixels
    marginBottom: 20,           // Adiciona margem inferior de 20 pixels
    marginTop: 20,              // Adiciona margem superior de 20 pixels
  },
  input: {
    width: '50%',               // Define a largura como 50% da largura do container pai
    height: 40,                 // Define a altura do campo de entrada como 40 pixels
    borderColor: 'gray',        // Define a cor da borda como cinza
    borderWidth: 1,             // Define a espessura da borda como 1 pixel
    marginBottom: 10,           // Adiciona margem inferior de 10 pixels
    padding: 10,                // Adiciona espaçamento interno de 10 pixels
  },
  button: {
    backgroundColor: 'blue',     // Define a cor de fundo do botão como azul
    padding: 10,                // Adiciona espaçamento interno de 10 pixels
  },
});
