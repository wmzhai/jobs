import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import AuthScreen from './screens/auth_screen'
import WelcomeScreen from './screens/welcome_screen'
import MapScreen from './screens/map_screen'
import DeckScreen from './screens/deck_screen'
import SettinsScreen from './screens/settings_screen'
import ReviewScreen from './screens/review_screen'

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettinsScreen }
            })
          }
        },{
          tabBarPosition: 'bottom',
         // swipeEnabled: false,          
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }          
        })
      }
    }, {
      navigationOptions: {
        tabBar: { visible: false }
      },
      lazyLoad: true,
    })

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

Expo.registerRootComponent(App)