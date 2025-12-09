import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FloatingButton = () => {
  return (
  <TouchableOpacity activeOpacity={0.8} style={styles.wrap}>
    <View style={styles.button}>
        <Ionicons name="add" size={28} color='#fff'/>
    </View>
  </TouchableOpacity>
)};

export default FloatingButton;

const styles = StyleSheet.create({
    wrap: {
        position: 'absolute',
        right: 22,
        bottom: 22,
        zIndex: 20
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F3662C',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#d66631ff',
        shadowOpacity: 1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6},
        elevation: 8
    }
});
