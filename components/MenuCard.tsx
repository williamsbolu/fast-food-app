import { useCartStore } from "@/store/cart.store";
import { MenuItem } from "@/type";
import React from "react";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

const MenuCard = ({
  item: { $id, image_url, name, price },
}: {
  item: MenuItem;
}) => {
  const { addItem } = useCartStore();

  // Read the image from storage from the appwrite
  //   const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;

  return (
    <TouchableOpacity
      className="menu-card"
      style={
        Platform.OS === "android"
          ? { elevation: 10, shadowColor: "#878787" }
          : {}
      }
    >
      <Image
        source={{ uri: image_url }}
        className="size-32 absolute -top-10"
        resizeMode="stretch"
      />
      <Text
        className="text-bold text-center text-dark-100 mb-2"
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>
      <TouchableOpacity
        onPress={() =>
          addItem({ id: $id, name, price, image_url, customizations: [] })
        }
      >
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MenuCard;
