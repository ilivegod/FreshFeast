import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import RestaurantCard from "../components/RestaurantCard";
import FeaturedCard from "../components/FeaturedCard";
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState([1, 2, 3, 4, 5, 6]);
  const [restaurant, setRestaurant] = useState([1, 2, 3, 4]);
  const [featured, setFeatured] = useState([1, 2, 3]);
  return (
    <SafeAreaView style={{ backgroundColor: "#E9E9E9" }}>
      {/* #EAEAEA */}
      <ScrollView
        style={{
          paddingVertical: 10,
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Feather name="map-pin" size={24} color="black" />

            <Text>Legon, Accra</Text>
          </View>
          <TouchableOpacity
            style={{ borderWidth: 0.5, borderRadius: 7, padding: 6 }}
            onPress={() =>
              router.push({
                pathname: "/cart",
                params: { user: "Seka" },
              })
            }
          >
            <Ionicons name="cart-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              height: 40,
              marginTop: 12,
              borderColor: "gray",
              padding: 10,
              borderRadius: 5,
              alignItems: "left",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <View style={{ flexDirection: "row", gap: 7 }}>
              <AntDesign name="search1" size={21} color="black" />
              <TextInput
                style={{ color: "black" }}
                placeholder="search dishes, restaurants"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginTop: 25, paddingHorizontal: 5 }}
        >
          {category.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={{
                    borderColor: "gray",
                    flexDirection: "row",
                    alignItems: "center",
                    height: 40,
                    gap: 5,
                    padding: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                    backgroundColor: "white",
                    width: 100,
                    marginRight: 11,
                  }}
                >
                  <Ionicons name="pizza-outline" size={22} color="black" />
                  <Text>Pizza</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View
          style={{
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          {featured.map((featured, index) => {
            return (
              <View key={index}>
                <FeaturedCard />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
