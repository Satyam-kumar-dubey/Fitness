import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { exercises } from "../constants";
import { useLocalSearchParams, useRouter } from "expo-router";


export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: 10,
        marginBottom:hp(4)
      }}
    >
      {exercises.map(
        (item, index) => (
          (
            <Text
              style={{
                height: hp(25),
                width: wp(45),
              }}
              key={index}
            >
              {item.name}
            </Text>
          ),
          (
            <TouchableOpacity onPress={() => router.push(item.name)}>
              <Image
                source={item.image}
                style={{
                  height: hp(25),
                  width: wp(45),
                  borderRadius: 20,
                  resizeMode: "cover",
                  marginTop: "5%",
                  position: "relative",
                }}
                key={index}
              />

              <Text
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "5%",
                  color: "white",
                  fontWeight: "900",
                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        )
      )}
    </View>

    // <View style={{display:'flex',flex:1, flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',margin:10}}>
    //   <Text style={{height:hp(25),width:wp(45),backgroundColor:'red'}}>Exercises</Text>
    //   <Text style={{height:hp(25),width:wp(45),backgroundColor:'red'}}>Exercises</Text>
    //   <Text style={{height:hp(25),width:wp(45),backgroundColor:'red'}}>Exercises</Text>
    //   <Text style={{height:hp(25),width:wp(45),backgroundColor:'red'}}>Exercises</Text>
    // </View>
  );
}
