import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";

// interface ChatItem {
//   name: string;
//   time: string;
//   avatar?: string;
//   message?: string;
//   typing?: boolean;
//   unread?: number;
// }

// interface Props {
//   item: ChatItem;
// }

export default function Chat({ item }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.8 }]}
    >
      <View style={styles.left}>
        <Avatar size={56} source={item.avatar}/>
      </View>

      <View style={styles.center}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <View style={styles.row}>
          <Text
            style={[
              styles.message,
              item.typing && { color: "#FF6A2B", fontStyle: "italic" },
            ]}
            numberOfLines={0}
          >
            {item.typing ? "Typing..." : item.message}
          </Text>

          {item.unread ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomColor: '#F0E6E2',
    borderBottomWidth: 1
  },
  left: {
    marginRight: 14,
  },
  center: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333'
  },
  time: {
    fontSize: 12,
    color: '#999'
  },
  message: {
    color: '#666',
    marginTop: 6,
    flex: 1,
    paddingRight: 8
  },
  badge: {
    backgroundColor: '#F3662C',
    minWidth: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '700'
  },
});
