import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = () => {
  return (
    <SafeAreaView className="big-white h-full">
        <ScrollView contentContainerClassName='h-full'>
            <View className="px-10">
                <Text className="text-base text-center uppercase text-black-200">Welcome to SyncUp</Text>
                <Text className="text-3xl text-black-300 text-center mt-2"></Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn