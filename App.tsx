import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ActivityIndicator } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OffersScreen from './src/screens/OffersScreen';

import { fetchTabsFromAPI, TabItem } from './src/api/dummyTabsAPI';

const Tab = createBottomTabNavigator();

const screenComponentMap: Record<string, React.ComponentType<any>> = {
  Home: HomeScreen,
  Search: SearchScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen,
  Offers: OffersScreen,
};

const App = () => {
  // dynamic tabs fetched from API
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTabsFromAPI().then((data) => {
      // Filter for visible tabs
      const visibleTabs  = data.filter((tab) => tab.visible);
      // console.log("visibleTabs", visibleTabs);
      // Determine their order in tab bar
      const sortedTabs = visibleTabs.sort((a, b) => a.index - b.index);
      // console.log("sortedTabs", sortedTabs);
      setTabs(sortedTabs);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          };
        }}
      >
        {/* Match the component from the map using the BE componentKey */}
        {tabs.map(({ name, componentKey }) => {
          const ScreenComponent = screenComponentMap[componentKey];
          return ScreenComponent ? (
            <Tab.Screen key={name} name={name} component={ScreenComponent} />
          ) : null;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
