import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

const DishCard = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateScreenWidth);
  }, []);

  let halfOfScreen = screenWidth / 2.3;

  let DishDescription = "Cheezy Mozarella dshjkds shjkdh";

  return (
    <View
      style={{
        backgroundColor: "white",
        height: 180,
        marginVertical: 5,
        width: halfOfScreen,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          width: "95%",
          height: 90,
          marginTop: 5,
          backgroundColor: "red",
          borderRadius: 8,
        }}
      >
        <Text>Image</Text>
      </View>
      <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "600", fontSize: 17 }}>
          Burger With Meat
        </Text>
        <Text
          style={{
            color: "gray",
            marginTop: 5,
            fontWeight: "400",
            fontSize: 13,
          }}
        >
          {DishDescription.length > 18
            ? DishDescription.slice(0, 18) + "..."
            : DishDescription}
        </Text>
        <Text
          style={{
            color: "red",
            marginTop: 5,
            fontWeight: "700",
            fontSize: 14,
          }}
        >
          ₵ 75.00
        </Text>
      </View>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({});
