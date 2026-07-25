import { colors } from '@/constants/colors'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import * as SystemUI from 'expo-system-ui'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SpaceGrotesk-Medium': require('../assets/font/SpaceGrotesk-Medium.ttf'),
    'SpaceGrotesk-SemiBold': require('../assets/font/SpaceGrotesk-SemiBold.ttf'),
    'DMSans-Regular': require('../assets/font/DMSans-Regular.ttf'),
    'DMSans-Medium': require('../assets/font/DMSans-Medium.ttf'),
  })

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.voidBlack)
  }, [])

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.voidBlack },
        }}
      />
    </>
  )
}
