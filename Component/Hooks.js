import { useState, useEffect, Children } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

export function useAnimation() {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 2000,
     // easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => handleAnimation());
    });
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return animation;
}

const styles = StyleSheet.create({});
