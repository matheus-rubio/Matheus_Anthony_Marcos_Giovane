import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";
import api from "../../Service/api";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Button, IconButton } from "react-native-paper";

import { ScreenRoutes } from "../../Enums/ScreenRoutes";

import { useNavigation } from "@react-navigation/native";

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
    fontSize: 15,
  },
  text2: {
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
  },
});

const Home: React.FC = ({ route, navigation }) => {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState<any>([]);
  const [quiz, setQuiz] = useState<any>([]);
  const [showSubjects, setShowSubjects] = useState<boolean>(true);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  async function loadSUbjects() {
    await api.get("/subjects").then((response) => {
      setSubjects(response.data);
    });
  }

  async function loadQuiz(_id_subject: string) {
    await api
      .get("/quiz", { params: { subject: _id_subject } })
      .then((response) => {
        setQuiz(response.data);
      });
  }

  useEffect(() => {
    loadSUbjects();
  }, []);

  return (
    <View style={styles.container}>
      {showSubjects && (
        <Text style={styles.text1}>Selecione uma disciplina:</Text>
      )}
      {showQuiz && (
        <Text style={styles.text1}>Selecione um Quiz de {subject}:</Text>
      )}

      {showSubjects && (
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
              onPress={() => {
                setShowSubjects(false);
                setShowQuiz(true);
                setSubject(item.nm_subject);
                loadQuiz(item._id);
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
      )}
      {showQuiz && (
        <>
          <FlatList
            style={{ width: "100%" }}
            data={quiz}
            ListEmptyComponent={
              <Text style={{ alignSelf: "center", fontSize: 18, color: "red" }}>
                Ainda não possui nenhum Quiz para essa disciplina
              </Text>
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  margin: 5,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  borderBottomWidth: 1,
                }}
                onPress={() => {
                  setShowSubjects(false);
                }}
              >
                {
                  <Image
                    style={{ width: 50, height: 50, margin: 10 }}
                    source={require("../../Assets/logo_ufjf.jpg")}
                  />
                }
                <View style={styles.flatListContent}>
                  <Text style={styles.text2}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <IconButton
            icon="arrow-left-circle"
            size={30}
            color="#E4B423"
            onPress={() => {
              setShowSubjects(true);
              setShowQuiz(false);
              setQuiz([]);
            }}
          />
        </>
      )}
      <Button
        onPress={() => navigation.navigate(ScreenRoutes.NEWQUIZ as never)}
      >
        OPA
      </Button>
    </View>
  );
};

export default Home;
