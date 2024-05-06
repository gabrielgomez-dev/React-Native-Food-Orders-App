import { FlatList } from "react-native";
import products from "@/assets/data/products";
import ProductItem from "@/components/ProductItem";
import { Stack } from "expo-router";

export default function MenuScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Menu" }} />
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      numColumns={2}
    />
    </>
  );
}