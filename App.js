import React from "react"
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native"

// 기기 화면의 너비와 높이 얻어오기
const { height, width } = Dimensions.get("window")

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> To Do </Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"새로운 일정"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30,
  },

  // 텍스트 인풋은 기본적으로 높이가 있어야 한다.
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5
  },
})
