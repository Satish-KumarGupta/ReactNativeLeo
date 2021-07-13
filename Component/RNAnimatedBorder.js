import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useAnimation } from "./Hooks";
export default function RNAnimatedBorder(props) {
  const {
    firstColor,
    secondColor,
    borderWidth,
    borderRadius,
    elevation,
    margin,
    padding,
  } = props;
  const anim = useAnimation();

  const boxInterpolation = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [firstColor, secondColor],
  });

  const animatedStyle = {
    borderColor: boxInterpolation,
  };

  return (
    <Animated.View
      style={{
        ...animatedStyle,
        borderWidth,
        borderRadius,
        elevation,
        margin,
        padding,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({});