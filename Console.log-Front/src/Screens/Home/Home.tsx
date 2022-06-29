/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import api from "../../Service/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  flatList: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  flatListContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffffa2",
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    margin: 30,
    fontSize: 19,
  },
  text2: {
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
  },
});

const Home: React.FC = ({ route, navigation }) => {
  const [subjects, setSubjects] = useState<any>([]);

  async function loadSUbjects() {
    await api.get("/subjects").then((response) => {
      setSubjects(response.data);
    });
  }

  useEffect(() => {
    loadSUbjects();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Selecione uma disciplina para comear:</Text>
      <FlatList
        style={{ width: "100%" }}
        data={subjects}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 5,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              borderBottomWidth: 1,
            }}
          >
            {
              <Image
                style={{ width: 50, height: 50, margin: 10 }}
                source={require("../../Assets/logo_ufjf.jpg")}
              />
            }
            <View style={styles.flatListContent}>
              <Text style={styles.text2}>{item.nm_subject}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
