import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import AuthUserContext from "../../Contexts/AuthUserContext/context";
import { ScreenRoutes } from "../../Enums/ScreenRoutes";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Ranking: React.FC = ({ route, navigation }) => {
  const { user } = useContext(AuthUserContext);
  const image =
    user?.type === "S"
      ? require("../../Assets/aluno.png")
      : require("../../Assets/professor.jpg");

  const ranking = ["Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", 
  "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts", "Thomás Causin: 5 pts"]

  return (
   
    <View style={styles.containerPrincipal}>
      <View style={styles.containerInfoCurso}>
        <Text style={styles.textInfoCurso}>Algoritmos de Ordenação</Text>
      </View>
      <FlatList 
        style={styles.containerRanking}
        data ={ranking}
        renderItem= {({item})=>(
        <View style={styles.containerPlace}>
          <Text style={styles.textPlace}>{item}</Text>
        </View>
        )}  

      />
   
          <TouchableOpacity style={styles.buttonBack}
            onPress={() => {
            navigation.navigate(ScreenRoutes.HOME as never);
          }}
          >
              <Text style={styles.textBack}>VOLTAR AO INÍCIO</Text>
          </TouchableOpacity>

    </View>
    
   
  
  );
};

const styles = StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    containerInfoCurso: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFBC2B",
      width: "90%",
      height: "11%",
      borderRadius: 37,
      marginTop: 20,
    },
    containerRanking: {
      backgroundColor: "#fff",
      width: "100%",
      marginTop: 20,
      marginBottom: 80,
    },
    containerPlace: {
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: "60%",
      backgroundColor: "#2F72BC",
      borderRadius: 40,
      marginTop: 25,
      marginBottom: 20,
      marginLeft: 50,
    },
    containerBotton: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    buttonBack: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2F72BC",
      width: "40%",
      height:  "4%",
      marginBottom: 40,
    },
    textInfoCurso: {
      fontSize: 20,
    },
    textPlace: {
      fontSize: 20,
      color: "#fff",
    },
    textBack: {
      fontSize: 15,
      color: "#fff",
    }
});


export default Ranking;


