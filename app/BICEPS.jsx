import { View, Text, Button, Image, StyleSheet, StatusBar,ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default function bodyparts() {
  const router = useRouter();
  return (
    <View style={styles.main}>
      <StatusBar style="grey" />
      <View style={styles.imgcontainer}>
        <Image
          source={require("../assets/images/biceps.peg.jpeg")}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "orange" ,marginTop:hp(1.5)}}>
          Exercises
        </Text>
      </View>

      <ScrollView>
        <View
          style={styles.gifcontainer}
        >
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm1.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm2.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm3.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm4.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm5.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View
            style={styles.gifimgcontainer}
          >
            <Image
              source={require("../assets/images/arm6.gif")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    alignItems: "center",
    justifyContent:'space-between'
  },
  imgcontainer: {
    width: wp(100),
    height: hp(50),
    padding: hp(1),
    overflow: "hidden",
  },
  gifcontainer: {
    display: "flex",
    flexDirection: "row",
    gap: wp(4),
    flexWrap: "wrap",
    padding: wp(3),
    marginTop: hp(2),
  },
  gifimgcontainer:{
    height: hp(25),
    width: wp(45),
    borderRadius: 8,
  }
});
