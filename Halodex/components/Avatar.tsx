import { StyleSheet, Image, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

interface AvatarProps {
    source?: any
    size?: number
}

export default function Avatar ({ source, size = 48 }: AvatarProps) {
    if (!source) {
        return (
          <View
            style={[
              styles.placeholder,
              { width: size, height: size, borderRadius: size / 2 },
            ]}
          >
            <Ionicons name="person" size={20} color="#333" />
          </View>
        );
    }
    return <Image source={source} style={[styles.img, {width: size, height: size, borderRadius: size / 2}]}/>
}

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: '#ccc6c2ff',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
    },
    img: {
        resizeMode: 'cover'
    },
})