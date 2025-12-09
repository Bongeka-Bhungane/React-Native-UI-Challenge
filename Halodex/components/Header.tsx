import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* LEFT: Title */}
        <Text style={styles.time}>9:41</Text>

        {/* RIGHT: Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="cellular" size={22} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="wifi" size={22} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="battery-full" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.header}>
        {/* LEFT: Title */}
        <Text style={styles.title}>HALODEK</Text>

        {/* RIGHT: Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="search-outline" size={22} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="ellipsis-vertical" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "ios" ? 50 : 30, // matches iPhone screenshot
    paddingBottom: 10,
    paddingHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "column",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FF6A2B",
    letterSpacing: 1,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  time: {
    fontSize: 20,
    fontWeight: "600",
    color: "#252525ff",
    letterSpacing: 1,
  },

  iconButton: {
    padding: 6,
    borderRadius: 10,
  },
});
