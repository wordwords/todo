import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

// 수정을 누르면 state를 수정모드로 변경해야 한다.
export default class ToDo extends Component {
  state = {
    isEditing: false, // 수정할 때 쓰이는 state
    isCompleted: false, // 수정을 안할 때 쓰이는 state (그냥 보여줄 때)
  }

  render() {
    const { isCompleted } = this.state // 계획 완료? 미완료?

    return (
      // TouchableOpacity: 터치 이벤트(onPress 등)를 사용할 수 있는 View
      // 한개를 패스하는 대신 array를 패스할 것.
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
        </TouchableOpacity>
        <Text style={(styles.text, isCompleted ? styles.completedText : styles.uncompletedText)}> 투두 </Text>
      </View>
    )
  }

  // 완성/미완성에 따라 다른 스타일을 주고 싶은 경우
  _toggleComplete = () => {
    this.setState((prevState) => {
      return {
        isCompleted: !prevState.isCompleted,
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb", // 밑줄 색깔
    borderBottomWidth: StyleSheet.hairlineWidth, // 밑에 밑줄
    flexDirection: "row",
    alignItems: "center",
  },

  // 빨간색 원 (클릭할 수 있다)
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 3,
    marginRight: 10,
    marginLeft: 10,
  },

  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20,
  },

  completedCircle: {
    borderColor: "#bbb",
  },

  uncompletedCircle: {
    borderColor: "#F23657",
  },

  completedText: {
    color: "#bbb", // 완료: 회색으로 바뀐다.
    textDecorationLine: "line-through", // 완료: 밑줄이 그어진다.
  },

  uncompletedText: {},
})
