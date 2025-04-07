import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const posts = [
  {
    id: "1",
    user: "Leah Lamarr",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013", // Replace with your vibe
    caption: "Looking for a clean, quiet roommate near UTA! Available from May 💫",
    tags: ["Clean", "Quiet", "Junior"],
  },
  {
    id: "2",
    user: "Jordan A.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013", // Replace with your vibe
    caption: "Got a spot open 5 mins from campus. Message me if you're chill 😎",
    tags: ["Senior", "Gamer", "Chill"],
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <Text style={styles.greeting}>Hey Sam 👋</Text>
      <Text style={styles.subtext}>Ready to find your next roommate?</Text>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>➕ Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnOutline}>
          <Text style={styles.actionTextOutline}>Browse Matches</Text>
        </TouchableOpacity>
      </View>

      {/* Feed */}
      {posts.map((post) => (
        <View key={post.id} style={styles.postCard}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <View style={styles.userRow}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <Text style={styles.username}>{post.user}</Text>
            </View>
            <Text style={styles.caption}>{post.caption}</Text>
            <View style={styles.tags}>
              {post.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  greeting: { fontSize: 24, fontWeight: "bold", marginTop: 35 },
  subtext: { fontSize: 15, color: "#555", marginBottom: 20 },

  actions: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  actionBtn: {
    backgroundColor: "#000", // black button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionText: {
    color: "#fff", // white text
    fontWeight: "600",
    fontSize: 14,
  },
  actionBtnOutline: {
    borderColor: "#000", // black border
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#fff", // white background
  },
  actionTextOutline: {
    color: "#000", // black text
    fontWeight: "600",
    fontSize: 14,
  },
  postCard: {
    marginBottom: 30,
    backgroundColor: "#E6E6E6", // slightly darker card background
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  postImage: {
    width: "100%",
    height: 240,
  },
  postContent: {
    padding: 16,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
  },
  caption: {
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    color: "#555",
  },
});
