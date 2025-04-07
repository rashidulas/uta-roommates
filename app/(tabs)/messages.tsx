import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const messages = [
  {
    id: "1",
    name: "Leah Lamarr",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Sounds good! Let me know when you’re free.",
    time: "2h ago",
  },
  {
    id: "2",
    name: "Jordan A.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    lastMessage: "Cool! I’ll check it out tonight.",
    time: "1d ago",
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages 📬</Text>

      {messages.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No messages yet. Start matching to chat!</Text>
        </View>
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.messageCard}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <View style={styles.messageInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.preview} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingTop: 10 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 50 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  emptyState: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 16, color: "#777", textAlign: "center" },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 14 },
  messageInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
  preview: { fontSize: 14, color: "#666" },
  time: { fontSize: 12, color: "#999" },
});
