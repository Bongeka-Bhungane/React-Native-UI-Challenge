import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const tabs = ['Chat', 'Status', 'Calls']

const TabBar = () => {
    const [selected, setSelected] = useState("Chat")
  return (
    <View style={styles.container}>
      {tabs.map((t) => {
        const active = t === selected;
        return (
            <Pressable
            key={t}
            onPress={() => setSelected(t)}
            style={({ pressed}) => [
                styles.tab, 
                active && styles.activeTab,
                pressed && { opacity: 0.8 }
            ]}
            >
                {active ? (
                    <View style={styles.activeInner}>
                        <Text style={styles.tabText}></Text>
                    </View>
                ): }
            </Pressable>
        )
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        flexDirection: 'row',
        backgroundColor: '#FFF6F1',
        padding: 6,
        borderRadius: 12,
        alignSelf: 'stretch',
    },
    tab: {
        color: '#B15F3B',
        fontWeight: '600'
    },
    activeTab: {

    },
    activeInner: {

    },
    tabText: {
        
    }
})