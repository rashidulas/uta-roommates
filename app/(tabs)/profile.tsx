import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const user = {
  name: "Leah Lamarr",
  year: "Junior",
  major: "Computer Science",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  bio: "Hi! I’m Leah — I love starting my mornings early, keeping a clean space, and enjoying quiet evenings with my Switch.",
  lifestyle: ["Early Riser", "Clean", "Prefers Quiet"],
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Picture */}
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.subInfo}>{user.year} • {user.major}</Text>

        {/* Section: Personal Info */}
        <SectionTitle title="Personal Info" />
        <Card label="Edit Bio" icon="📝" />
        <Card label="Lifestyle Preferences" icon="🏷️" />
        <Card label="View Matches" icon="❤️" />

        {/* Section: Settings */}
        <SectionTitle title="Settings" />
        <Card label="Privacy Settings" icon="🔒" />
        <Card label="Account Preferences" icon="⚙️" />

        {/* Section: Help */}
        <SectionTitle title="Help" />
        <Card label="Contact Us" icon="📩" />
        <Card label="FAQs" icon="❓" />
        <Card label="Logout" icon="🚪" />
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable Components
const Card = ({ label, icon }: { label: string; icon: string }) => (
  <TouchableOpacity style={styles.card}>
    <Text style={styles.cardText}>
      <Text style={styles.icon}>{icon}</Text> {label}
    </Text>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

const SectionTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title.toUpperCase()}</Text>
);

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111",
  },
  subInfo: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    color: "#999",
    marginTop: 20,
    marginBottom: 6,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#F5F5F7",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    fontSize: 15,
    color: "#111",
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  arrow: {
    fontSize: 18,
    color: "#ccc",
  },
});
