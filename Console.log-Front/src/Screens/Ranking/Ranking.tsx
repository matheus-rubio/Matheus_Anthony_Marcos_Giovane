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
        <View style={styles.containerBoxPlace}>
          <View style={styles.containerMedal}></View>
          <View style={styles.containerPlace}>
            <Text style={styles.textPlace}>{item}</Text>
          </View>
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
      marginBottom: -15,
    },
    containerRanking: {
      backgroundColor: "#fff",
      width: "100%",
      marginTop: 20,
      marginBottom: 80,
     
    },
    containerBoxPlace: {
      flexDirection: 'column',
      marginBottom: 25,
      width: "100%",
      height: "70%",
    },
    containerMedal: {
      marginTop: 30,
      marginBottom: 20,
      marginLeft: 25,
      width: "70%",
      height: "70%",
      backgroundColor: "#DFDFDF",
      borderRadius: 40,
    },
    containerPlace: {
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: "90%",
      backgroundColor: "#2F72BC",
      borderRadius: 40,
      marginTop: 25,
      marginBottom: 20,
      marginLeft: 70,
      position: 'absolute',
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
      width: "45%",
      height:  "5%",
      marginBottom: 40,
      borderRadius: 5,
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