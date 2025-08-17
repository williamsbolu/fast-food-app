import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const params = useLocalSearchParams<{
    query: string;
    category: string;
  }>();
  const [query, setQuery] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    // ! (text: string) => router.setParams({ query: text }), this closes the keyboard after typing because searchParams triggers an update after each key stroke
    (text: string) => router.push(`/search?query=${text}`), // this still didnt work for it 🥲
    500
  );

  const handleSearch = (text: string) => {
    setQuery(text);

    debouncedSearch(text);
  };

  return (
    <View className="searchbar">
      <TextInput
        className="flex-1 p-5"
        placeholder="Search for pizzas, burgers..."
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#A0A0A0"
      />
      <TouchableOpacity
        className="pr-5"
        onPress={() => router.setParams({ query })}
      >
        <Image
          source={images.search}
          className="size-6"
          resizeMode="contain"
          tintColor="#5D5F6D"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

// 3:29:00
// ! This code here gave a common issue in react native,
// ! TextInput inside FlatList header will loose focus when FlatList re-renders
// ! This causes the keyboard to automatically dismiss, even though we're not navigating or tapping anything
