import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function TelaPerfil() {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Image
        source={require("./assets/minha-foto.jpg")} // Caminho da imagem
        style={styles.fotoPerfil} // Estilo para a foto
      />
      <Text style={styles.titulo}>Informações de Perfil</Text>
      <Text>
        <strong>Nome:</strong> Alyson Henrique Seixas do Nascimento{"\n"}
        <strong>Telefone:</strong> (81) 98342-6558{"\n"}
        <strong>E-mail:</strong> alysonnascimento142@gmail.com{"\n"}
        <strong>Endereço:</strong> Rua Almirante Barroso - Campo Grande{"\n"}
        <strong>Cidade:</strong> Recife{"\n"}
        <strong>Estado:</strong> Pernambuco{"\n"}
        <strong>Idade:</strong> 19 Anos - Solteiro{"\n"}
      </Text>
    </ScrollView>
  );
}

function TelaExperiencia() {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.titulo}>Experiência Profissional</Text>
      <Text>
        <strong>Empresa:</strong> C3 Engenharia e Incorporações{"\n"}
        <strong>Cargo:</strong> Auxiliar Administrativo{"\n"}
        <strong>Período:</strong> Março/2023 - Presente{"\n"}
      </Text>
    </ScrollView>
  );
}

function TelaEducacao() {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.titulo}>Formação Acadêmica</Text>
      <Text>
        <strong>Ensino Superior (Cursando)</strong>{"\n"}
        Faculdade SENAC PE - 2º Período em Análise e Desenvolvimento de Sistemas{"\n"}
        Endereço: Rua do Apolo 235 - Recife Antigo{"\n"}
        {"\n"}
        <strong>Ensino Médio (Completo)</strong>{"\n"}
        EREM NÓBREGA - Conclusão em 2021{"\n"}
        Endereço: Estr. de Belém, 257 - Encruzilhada{"\n"}
      </Text>

      <Text style={styles.titulo}>Qualificações e Atividades Complementares</Text>
      <Text>
        - Ennet Recife - Curso Profissionalizante | 2022 - Conclusão em 2024.{"\n"}
        - Web Design: Introdução e desenvolvimento na criação de sites através do Wordpress, Wix.{"\n"}
        - MAI: Introdução a Tecnologia, Digitação, Sistemas Operacionais, Canva.{"\n"}
        - Robótica: Prática e manuseio de arduino e montagem de robôs através de kits.{"\n"}
        - ITIC: Organização, Segurança e Configuração dos Sistemas, Websites, Gerenciamento de mídias, Tratamento de imagens.{"\n"}
        - Manutenção, Configuração e Redes: Aprimoramento em suporte de Hardware e Software visando a resolução de problemas tecnológicos gerais.{"\n"}
        - Senac PE - Criação de Aplicativos com Flutter(Cursando){"\n"}
        - Google + CIEE - Curso EAD - Suporte de TI (Cursando){"\n"}
        - Inglês avançado{"\n"}
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;

            if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
              iconColor = focused ? "#2ca4bf" : color; 
            } else if (route.name === "Experiência") {
              iconName = focused ? "briefcase" : "briefcase-outline";
              iconColor = focused ? "#2ca4bf" : color;
            } else if (route.name === "Educação") {
              iconName = focused ? "school" : "school-outline";
              iconColor = focused ? "#2ca4bf" : color;
            }

            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#008080",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Perfil" component={TelaPerfil} />
        <Tab.Screen name="Experiência" component={TelaExperiencia} />
        <Tab.Screen name="Educação" component={TelaEducacao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 20,
  },
});
