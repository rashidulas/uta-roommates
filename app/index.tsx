import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Find</Text>
          <Text style={styles.title}>Your</Text>
          <Text style={styles.title}>Match</Text>
        </View>

        <Text style={styles.subtitle}>UTA ROOMMATES</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomSection: {
    width: "100%",
    paddingHorizontal: 32,
    paddingBottom: 60,
    alignItems: "center",
  },
  titleBlock: {
    marginBottom: 30,
    alignItems: "center",
    maxWidth: width - 40,
  },
  title: {
    fontSize: 98,
    fontWeight: "800",
    color: "#5DAAF8",
    textAlign: "center",
    lineHeight: 100,
    fontFamily: "System", // you can replace with a prettier font like 'AvenirNext-DemiBold' if added
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#1a1a1a",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
