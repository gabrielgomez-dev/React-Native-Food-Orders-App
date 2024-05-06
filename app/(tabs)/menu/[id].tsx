import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import Button from "@/components/Button";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const productSizes = ["S", "M", "L", "XL"];
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  function handleAddToCart() {
    alert(`Added "${product?.name}" to cart with size "${selectedSize}"`);
  }

  return (
    <>
      <Stack.Screen options={{ title: product?.name }} />
      <View style={styles.container}>
        <Image
          source={{ uri: product.image || "" }}
          alt={product.name}
          style={styles.image}
        />
        <View style={styles.sizesContainer}>
          {productSizes.map((size) => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeItem,
                {
                  backgroundColor:
                    selectedSize === size ? "lightgrey" : "white",
                },
              ]}
            >
              <Text key={size} style={styles.sizeText}>
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Button onPress={() => handleAddToCart()} text="Add to cart" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: "90%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
    marginVertical: 15,
  },
  sizesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
    gap: 15,
  },
  sizeItem: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
