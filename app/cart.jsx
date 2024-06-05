import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

const Cart = () => {
  const [dishCard, setDishCard] = useState([1, 2, 3]);

  return (
    <SafeAreaView style={{ paddingHorizontal: 15, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", backgroundColor: "white" }}
      >
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
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Cart</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {dishCard.map((dish, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0.5,
                  borderBottomColor: "gray",
                  paddingVertical: 25,
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    marginRight: 20,
                    borderColor: "gray",
                  }}
                ></View>
                <View>
                  <Text
                    style={{ fontWeight: "600", fontSize: 16, marginBottom: 5 }}
                  >
                    Burger with Meat
                  </Text>
                  <View style={{ marginBottom: 5 }}>
                    <Text>
                      <Text style={{ color: "gray" }}>Size:</Text> Big
                    </Text>
                  </View>

                  <View
                    style={{
                      height: 35,
                      width: 100,
                      borderWidth: 0.5,
                      borderColor: "gray",
                      borderRadius: 7,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexDirection: "row",
                      position: "absolute",
                      bottom: 5,
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
                </View>
                <TouchableOpacity
                  style={{ position: "absolute", right: 15, top: 20 }}
                >
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
                <View
                  style={{
                    position: "absolute",

                    bottom: 30,
                    right: 15,
                  }}
                >
                  <Text style={{ fontWeight: "700", fontSize: 20 }}>
                    ₵ 75.00
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "gray", fontSize: 17 }}>Subtotal</Text>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>₵ 75.00</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontSize: 17 }}>Delivery</Text>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>₵ 5.00</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontSize: 17 }}>Delivery</Text>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>₵ 80.00</Text>
          </View>
        </View>
        <View
          style={{
            height: 65,
            width: "97%",
            borderWidth: 1,
            borderRadius: 10,
            position: "absolute",
            bottom: 5,
            justifyContent: "space-between",
            alignSelf: "center",
            alignItems: "center",
            margin: "auto",
            backgroundColor: "red",
            borderColor: "red",
            flexDirection: "row",
            paddingHorizontal: 15,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
