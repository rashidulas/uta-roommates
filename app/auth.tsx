import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <Text style={styles.title}>
        {isSignup ? "Create an account" : "Welcome back"}
      </Text>

      {/* Email */}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Info */}
      <Text style={styles.helperText}>Use at least 8 characters</Text>

      {/* Main Action Button */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.replace("/(tabs)/home")}
        >
        <Text style={styles.primaryButtonText}>
            {isSignup ? "Sign up" : "Log in"}
        </Text>
        </TouchableOpacity>


      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Google Button (visual only for now) */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Toggle Auth Mode */}
      {isSignup ? (
        <Text style={styles.switchText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => setIsSignup(false)}>
            Log in
          </Text>
        </Text>
      ) : (
        <>
          <Text style={styles.forgotText}>Forgot password?</Text>
          <TouchableOpacity
            onPress={() => setIsSignup(true)}
            style={styles.secondaryButton}
          >
            <Text style={styles.secondaryButtonText}>Create an account</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 200,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 14,
  },
  helperText: {
    fontSize: 12,
    color: "#777",
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#5DAAF8",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  or: {
    marginHorizontal: 12,
    color: "#888",
  },
  googleButton: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  googleButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  switchText: {
    marginTop: 30,
    color: "#444",
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
    color: "#000",
  },
  forgotText: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },
  secondaryButton: {
    marginTop: 20,
    backgroundColor: "#000",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
