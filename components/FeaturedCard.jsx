import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, router } from "expo-router";

const FeaturedCard = () => {
  const [restaurant, setRestaurant] = useState([1, 2, 3, 4]);

  return (
    <View style={{ marginBottom: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Featured Restaurants
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "red" }}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 5, paddingHorizontal: 20 }}>
        <Text style={{ color: "gray" }}>Restaurant details</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {restaurant.map((item, index) => {
          return (
            <View key={index} style={{ paddingHorizontal: 5 }}>
              <TouchableOpacity
                style={{
                  marginRight: 25,
                }}
                // push
                // href="/restaurant"
                onPress={() =>
                  router.push({
                    pathname: "/restaurant",
                    params: { user: "Seka" },
                  })
                }
              >
                <RestaurantCard />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({});
