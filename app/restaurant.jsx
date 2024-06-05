import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import DishCard from "../components/DishCard";

import { Link, useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CartLongButton from "../components/CartLongButton";

const Restaurant = () => {
  const { id } = useLocalSearchParams();

  const [dish, setDish] = useState([1, 2, 3, 4, 5]);

  const [itemInCart, setItemInCart] = useState(false);
  return (
    <View>
      <ScrollView style={{ marginBottom: 10 }}>
        <View style={{ height: 240, backgroundColor: "red" }}>
          <View
            style={{
              position: "absolute",
              top: 70,
              left: 25,
              borderColor: "white",
              borderRadius: 50,
              alignItems: "center",
              padding: 4,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,

            backgroundColor: "#E9E9E9",
            marginTop: -40,
            paddingTop: 6,
          }}
        >
          {/* ----------- Restaurant details ----------------- */}

          <View
            style={{ paddingHorizontal: 15, paddingTop: 20, marginBottom: 5 }}
          >
            <Text style={{ fontWeight: "700", fontSize: 25 }}>Papa Johns</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              alignItems: "center",
              gap: 10,
              marginBottom: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <FontAwesome name="star" size={20} color="gold" />
              <Text style={{ color: "gray" }}>4 (4k reviews). </Text>
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
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontWeight: "600", fontSize: 17 }}>Fast Food</Text>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontWeight: "600", fontSize: 23, marginTop: 17 }}>
              Menu
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              backgroundColor: "#E9E9E9",
              paddingHorizontal: 12,
            }}
          >
            {dish.map((dish, index) => {
              return (
                <View style={{ paddingHorizontal: 5 }} key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: "/dishdetails",
                        params: { user: "Seka" },
                      })
                    }
                  >
                    <DishCard dish={dish} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {itemInCart ? (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: { user: "Seka" },
            })
          }
        >
          <CartLongButton />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
