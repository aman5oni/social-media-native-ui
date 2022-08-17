import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const ProfileDetail = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <ImageBackground
        source={require("../images/Photo2.png")}
        style={{
          height: 0.5 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={require("../images/BackIcon.png")} />
          </TouchableOpacity>
          <Image source={require("../images/Filter.png")} />
        </View>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: 0.08 * h,
            
          }}
        >
          <Image
            source={require("../images/Avatar.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{
              fontSize: 26,
              color: "#FFF",
              marginTop: 20,
            }}
          >
            Dipti Soni
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#FFF",
            }}
          >
            128k followers
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#FFF",
          marginTop: -50,
          borderRadius: 50,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            marginTop: 30,
          }}
        >
          Photos & Videos
        </Text>
        <Text
          style={{
            color: "#998FA2",
            fontSize: 18,
          }}
        >
          269 shots
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop:20
          }}
        >
          <Image
            source={require("../images/Photo3.png")}
            style={{
              borderTopLeftRadius: 40,
              marginRight: 16,
              borderBottomLeftRadius: 40,
            }}
          />
          <View>
            <Image
              source={require("../images/Photo5.png")}
              style={{ borderTopRightRadius: 40 }}
            />
            <Image
              source={require("../images/Photo6.png")}
              style={{ marginTop: 16, borderBottomRightRadius: 40 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;
