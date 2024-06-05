import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartLongButton = () => {
  return (
    <View
      style={{
        height: 55,
        width: "90%",
        borderWidth: 1,
        borderRadius: 30,
        position: "absolute",
        bottom: 40,
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "red",
        borderColor: "red",
        flexDirection: "row",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#FF6666",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>3</Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          View Cart
        </Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          $23
        </Text>
      </View>
    </View>
  );
};

export default CartLongButton;

const styles = StyleSheet.create({});
