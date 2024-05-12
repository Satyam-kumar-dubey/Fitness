
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Imagesslider from "../components/Imagesslider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Exercises from "../components/Exercises";

export default function home() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.text1}>READY TO</Text>
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </View>
          <View style={styles.secondLine}>
            <Text style={styles.text2}>WORKOUT</Text>
            <View>
              <Ionicons name="notifications" size={30} color="orange" />
            </View>
          </View>

          <View>
            <Imagesslider />
          </View>

          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginTop: hp(2),
                marginLeft: wp(4),
              }}
            >
              Exercises
            </Text>
          </View>

          <View>
            <Exercises />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
  },
  text2: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    color: "orange",
    marginBottom: "5%",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  secondLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 22,
  },
});
