import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const RestaurantCard = () => {
  return (
    <View
      style={{
        height: 195,
        width: 240,
        borderRadius: 25,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text>RestaurantCarddd</Text>
      </View>
      <View style={{ paddingTop: 9, paddingHorizontal: 7 }}>
        <Text style={{ fontWeight: "700", fontSize: 18 }}>Papa Johns</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <FontAwesome name="star" size={20} color="gold" />
          <Text style={{ color: "gray" }}>4 (4k reviews). </Text>
          <Text style={{ fontWeight: "600" }}>Fast Food</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Feather name="map-pin" size={20} color="gray" />
          <Text style={{ color: "gray" }}>Nearby. </Text>
          <Text style={{ fontWeight: "500", color: "black" }}>
            Legon, Accra
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;
