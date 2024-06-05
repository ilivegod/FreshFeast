import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const Dishdetails = () => {
  // const dispatch = useDispatch();

  let DescriptionText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,similique nobis? Non consectetur quo quod perspiciatis dolore sitdignissimos tempora!";
  return (
    <SafeAreaView style={{ paddingHorizontal: 15, backgroundColor: "white" }}>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            //backgroundColor: "red",

            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              position: "absolute",
              left: 0,
              borderWidth: 1,
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={{}}>Details</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 250,
            borderWidth: 0.5,
            borderRadius: 12,
            backgroundColor: "gray",
          }}
        >
          <Text>dsd</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600" }}>
            Burger With Meat
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>
            <Text style={{ color: "gray", fontSize: 17 }}>₵</Text>75
            <Text style={{ color: "gray", fontSize: 17 }}>.00</Text>
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "gray" }}>Name of Restaurant</Text>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Entypo name="location-pin" size={22} color="black" />
          <Text style={{ color: "gray" }}>east-legon, Accra </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 20 }}>Description</Text>
          <Text style={{ marginTop: 5, color: "gray", lineHeight: 20 }}>
            {DescriptionText.length > 650
              ? DescriptionText.slice(0, 650) + "..."
              : DescriptionText}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            bottom: 10,
            position: "absolute",

            width: "100%",
          }}
        >
          <View
            style={{
              height: 50,
              width: "34%",
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontWeight: "700", fontSize: 25 }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16 }}>1</Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "700", fontSize: 23 }}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: "63%",
              borderWidth: 0.5,
              borderRadius: 7,
              borderColor: "red",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
            }}
            onPress={() =>
              router.back({
                pathname: "/cart",
                params: { buttonClicked: "yes" },
              })
            }
          >
            <Text style={{ fontSize: 18, color: "white" }}>Add to cart </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dishdetails;

const styles = StyleSheet.create({});
