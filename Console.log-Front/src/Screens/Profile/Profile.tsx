import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import AuthUserContext from "../../Contexts/AuthUserContext/context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerHeader: {
    flex: 0.3,
    width: "100%",
    backgroundColor: "#2F72BC",
    alignItems: "center",
  },
  containerImage: {
    margin: -130,
    width: 250,
    height: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 150,
    elevation: 10,
  },
  containerInformation: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "150%",
    backgroundColor: "#2F72BC",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 30,
  },
  containerInformationInside: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "99%",
    height: 47,
  },
  image: {
    width: 240,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    margin: 5,
  },
  textoNome: {
    fontSize: 20,
    margin: 5,
  },
  textoTipo: {
    fontSize: 15,
  },
  textoMdelha: {
    marginRight: 120,
    color: "#FFB200",
  },
  textoQuiz: {
    color: "#2F72BC",
  },
  containerMedalhas: {
    backgroundColor: "2F72BC",
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Profile: React.FC = ({ route, navigation }) => {
  const { user } = useContext(AuthUserContext);
  const image =
    user?.type === "S"
      ? require("../../Assets/aluno.png")
      : require("../../Assets/professor.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}></View>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={image} />
        <Text style={styles.textoNome}>{user?.nm_user}</Text>
        {user?.type === "T" && <Text style={styles.textoTipo}>Professor</Text>}
        {user?.type === "S" && <Text style={styles.textoTipo}>Aluno</Text>}
        <View style={styles.containerInformation}>
          <View style={styles.containerInformationInside}>
            <Text style={styles.textoMdelha}>Medalhas</Text>
            <Text style={styles.textoQuiz}>Quizes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
