import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swiper from "react-native-deck-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const profiles = [
  {
    name: "Leah Lamarr",
    year: "Junior",
    major: "Computer Science",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    lifestyle: ["Early Riser", "Clean", "Prefers Quiet"],
    bio: "I like to wake up early, stay organized, and chill with my Switch.",
    matchScore: 87,
  },
  {
    name: "Jordan A.",
    year: "Senior",
    major: "Mechanical Engineering",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    lifestyle: ["Night Owl", "Gamer", "Chill"],
    bio: "I'm mostly focused on school but I enjoy late-night games and quiet spaces.",
    matchScore: 72,
  },
  {
    name: "Sofia R.",
    year: "Sophomore",
    major: "Psychology",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    lifestyle: ["Neat Freak", "Pet Friendly", "Yoga Fan"],
    bio: "Love having my space clean, doing yoga in the mornings, and caring for my pup!",
    matchScore: 91,
  },
];

export default function SwipeScreen() {
  const [index, setIndex] = useState(0);

  const getTraitColor = (trait: string): string => {
    const colors: Record<string, string> = {
      "Early Riser": "#FFEBB7",
      "Clean": "#D0F4DE",
      "Prefers Quiet": "#E0E0FF",
      "Night Owl": "#FDC5F5",
      "Gamer": "#B5EAEA",
      "Chill": "#FFE0AC",
      "Neat Freak": "#DAD4EF",
      "Pet Friendly": "#FFD6D6",
      "Yoga Fan": "#C3FBD8",
    };
    return colors[trait] || "#F1F1F1";
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Find Your Ideal Roommate</Text>
        <Text style={styles.subtext}>
          Discover UTA students who share your lifestyle and vibe 🏠
        </Text>

        <View style={styles.swiperWrapper}>
          <Swiper
            cards={profiles}
            cardIndex={index}
            renderCard={(card) => (
              <View style={styles.card}>
                <Text style={styles.label}>Potential Match</Text>
                <Image source={{ uri: card.image }} style={styles.profileImage} />
                <Text style={styles.name}>{card.name}</Text>
                <Text style={styles.subInfo}>{card.year} • {card.major}</Text>

                <View style={styles.traitsWrap}>
                  {card.lifestyle.map((trait, idx) => (
                    <View key={idx} style={[styles.traitBadge, { backgroundColor: getTraitColor(trait) }]}>
                      <Text style={styles.traitText}>{trait}</Text>
                    </View>
                  ))}
                </View>

                <Text style={styles.bio}>{card.bio}</Text>

                <View style={styles.compatBarWrapper}>
                  <View style={[styles.compatBarFill, { width: `${card.matchScore}%` }]} />
                </View>
                <Text style={styles.compatText}>Compatibility: {card.matchScore}%</Text>

                <View style={styles.actions}>
                  <TouchableOpacity style={styles.skipBtn}>
                    <Text style={styles.skipText}>not now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addText}>match</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            onSwiped={(i) => setIndex(i + 1)}
            stackSize={3}
            stackSeparation={15}
            backgroundColor="transparent"
            verticalSwipe={false}
            animateCardOpacity
            horizontalSwipe
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtext: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 4,
    paddingHorizontal: 20,
  },
  swiperWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#E6E6E6", // darker card
    width: width * 0.9,
    borderRadius: 40,
    paddingVertical: 36,
    paddingHorizontal: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
    height: 480,
  },
  label: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  compatBarFill: {
    height: "100%",
    backgroundColor: "#000", // black bar
  },
  skipBtn: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 50,
  },
  skipText: {
    fontSize: 14,
    color: "#000",
    textTransform: "lowercase",
  },
  addBtn: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 50,
  },
  addText: {
    fontSize: 14,
    color: "#fff",
    textTransform: "lowercase",
    fontWeight: "600",
  },
  
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subInfo: {
    fontSize: 14,
    color: "#777",
    marginBottom: 12,
  },
  traitsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 12,
    gap: 8,
  },
  traitBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  traitText: {
    fontSize: 12,
    color: "#333",
  },
  bio: {
    fontSize: 13,
    color: "#555",
    marginBottom: 16,
    textAlign: "center",
  },
  compatBarWrapper: {
    width: "100%",
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  
  compatText: {
    fontSize: 12,
    color: "#444",
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 30,
  },

});
