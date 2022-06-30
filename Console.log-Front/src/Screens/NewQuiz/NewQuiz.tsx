import { View, StyleSheet, Dimensions } from "react-native";
import {
  List,
  TextInput,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Checkbox,
} from "react-native-paper";
import React, { useState, useEffect } from "react";

const { height, width } = Dimensions.get("window");

const NewQuiz: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      width: width,
      height: height,
    },
    question: {
      width: "100%",
    },
  });

  const [quiz, setQuiz] = useState({
    title: "",
    subject: "62bba98a87687f39eaa52163",
    questions: [
      {
        title: "",
        alternatives: [
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
        ],
      },
      {
        title: "",
        alternatives: [
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
        ],
      },
      {
        title: "",
        alternatives: [
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
        ],
      },
      {
        title: "",
        alternatives: [
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
        ],
      },
      {
        title: "",
        alternatives: [
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
          { title: "", is_correct: false },
        ],
      },
    ],
  });

  const [visible, setVisible] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const showModal = (index) => {
    setCurrentQuestion(index);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    position: "absolute",
    top: "4rem",
    height: "45%",
    width: "80%",
    alignSelf: "center",
    borderRadius: "1rem",
    color: "black",
    textColor: "black",
  };

  useEffect(() => {
    console.log("quiz: ", quiz);
  }, [quiz]);

  return (
    <View style={styles.container}>
      <TextInput
        label="Título"
        mode="outlined"
        value={quiz.title}
        onChangeText={(text) => setQuiz({ ...quiz, title: text })}
        style={{ width: 328, height: 54 }}
        activeOutlineColor="#2F72BC"
      />

      {quiz.questions.map((item, index) => {
        return (
          <List.Item
            title={"Questão " + (index + 1).toString()}
            description={quiz.questions[index].title}
            style={styles.question}
            onPress={() => showModal(index)}
            right={(props) => (
              <List.Icon {...props} icon="pencil" color="gold" />
            )}
          />
        );
      })}

      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <TextInput
              label="Pergunta"
              mode="outlined"
              value={quiz.questions[currentQuestion].title}
              onChangeText={(text) => {
                let tempQuestions = [...quiz.questions];
                tempQuestions[currentQuestion].title = text;
                setQuiz({ ...quiz, questions: tempQuestions });
              }}
              style={{
                color: "black",
                width: "90%",
                height: 34,
                backgroundColor: "lightgrey",
              }}
              activeOutlineColor="#2F72BC"
            />
            <Text style={{ color: "black", marginTop: "1rem" }}>
              Escreva as alternativas e marque as corretas:{" "}
            </Text>
            {quiz.questions[currentQuestion].alternatives.map((item, index) => {
              return (
                <View
                  style={{
                    width: "100%",
                    height: "3rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Checkbox
                    status={item.is_correct ? "checked" : "unchecked"}
                    uncheckedColor="#636363"
                    color="#2F72BC"
                    onPress={() => {
                      let tempQuestions = [...quiz.questions];
                      let tempCheck = !item.is_correct;

                      tempQuestions[currentQuestion].alternatives[
                        index
                      ].is_correct = tempCheck;

                      setQuiz({ ...quiz, questions: tempQuestions });
                    }}
                  />
                  <TextInput
                    mode="flat"
                    underlineColor={"#2F72BC"}
                    value={
                      quiz.questions[currentQuestion].alternatives[index].title
                    }
                    onChangeText={(text) => {
                      let tempQuestions = [...quiz.questions];
                      tempQuestions[currentQuestion].alternatives[index].title =
                        text;
                      setQuiz({ ...quiz, questions: tempQuestions });
                    }}
                    style={{
                      color: "black",
                      width: "80%",
                      backgroundColor: "lightgrey",
                      height: "2rem",
                      marginTop: "1rem",
                    }}
                    activeOutlineColor="#2F72BC"
                  />
                </View>
              );
            })}
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

export default NewQuiz;
