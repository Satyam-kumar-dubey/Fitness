import { View, Text } from "react-native";
import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.main}>
      <StatusBar style='light' />
      <Image
        source={require("../assets/images/pexels-anush-gorak-1431282.jpg")}
        style={styles.img}
      />
      <Animated.View entering={FadeInDown.delay(100).springify()}>
        <Text
          style={{
            color: "white",
            fontSize: 35,
            fontWeight: "bold",
            position: "absolute",
            top: hp(8),
            left: wp(15),
          }}
        >
          Transform <Text style={{ color: "orange" }}>Yourself </Text>
        </Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(200).springify()}>
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => router.push('home')}
        >
          <Text style={styles.opacityButton}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: wp(100),
    height: hp(100),
    resizeMode: "cover",
    position: "absolute",
  },
  main: {
    flex: 1,
    backgroundColor: "#000",
  },
  opacity: {
    position: "absolute",
    top: hp(80),
    left: wp(30),
    backgroundColor: "orange",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 40,
  },
  opacityButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
