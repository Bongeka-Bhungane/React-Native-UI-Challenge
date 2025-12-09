import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const tabs = ["Chat", "Status", "Calls"];

const TabBar = () => {
  const [selected, setSelected] = useState("Chat");
  return (
    <View style={styles.container}>
      {tabs.map((t) => {
        const active = t === selected;
        return (
          <Pressable
            key={t}
            onPress={() => setSelected(t)}
            style={({ pressed }) => [
              styles.tab,
              active && styles.activeTab,
              pressed && { opacity: 0.8 },
            ]}
          >
            {active ? (
              <View style={[styles.activeInner]}>
                <Text style={styles.activeText}>{t}</Text>
              </View>
            ) : (
              <Text style={styles.tabText}>{t}</Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: "row",
    backgroundColor: "#FEECE5",
    padding: 6,
    borderRadius: 12,
    alignSelf: "stretch",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  activeTab: {
    backgroundColor: "#F3662C",
    color: 'white',
    borderRadius: 10,
  },
  activeInner: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  tabText: {
    color: "#B15F3B",
    fontWeight: "600",
  },
  activeText: {
    color: "#FEECE5",
  },
});
