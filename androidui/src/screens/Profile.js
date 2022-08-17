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
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Profile = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#241332",
      }}
    >
      <ImageBackground
        source={require("../images/ProfilePhoto.png")}
        style={{
          height: 0.45 * h,
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
          <Image source={require("../images/BackIcon.png")} />
          <Image source={require("../images/Filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }],
              color: "#FFF",
              fontSize: 35,
              marginVertical: 30,
              alignSelf: "center",
            }}
          >
            Dipti Soni
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
            }}
          >
            125
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#918998",
            }}
          >
            FOLLOWERS
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
            }}
          >
            150
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#918998",
            }}
          >
            FOLLOWING
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
            }}
          >
            321
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#918998",
            }}
          >
            LIKES
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#352641",
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 60,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 60,
            color: "#918998",
          }}
        >
          POPULAR
        </Text>
        <View
          style={{
            backgroundColor: "#8A56AC",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 60,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#FFF",
            }}
          >
            RECENT
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#352641",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../images/Avatar.png")} />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
              <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetail')}>
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
              }}
            >
              Dipti Soni
            </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "#918998",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("../images/ChevronLightIcon.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "#918998",
            marginVertical: 20,
            paddingHorizontal: 30,
            textAlign: "center",
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("../images/CommentIcon.png")} />

          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("../images/LikeIcon.png")} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#352641",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../images/Avatar.png")} />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
              }}
            >
              Dipti Soni
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#918998",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("../images/ChevronLightIcon.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "#918998",
            marginVertical: 20,
            paddingHorizontal: 30,
            textAlign: "center",
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("../images/CommentIcon.png")} />

          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("../images/LikeIcon.png")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;