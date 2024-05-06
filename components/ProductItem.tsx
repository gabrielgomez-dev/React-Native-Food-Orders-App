import { Image, Pressable, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import { Product } from "@/types";
import { router } from "expo-router";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  const handlePress = () => {
    router.push(`/menu/${product.id}`);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image
        source={{ uri: product.image || "" }}
        alt={product.name}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  image: { width: "100%", aspectRatio: 1, resizeMode: "contain" },
  title: { fontSize: 20, fontWeight: "bold", color: "black", marginBottom: 10 },
  price: { fontSize: 14, color: "green", marginBottom: 10 },
});
