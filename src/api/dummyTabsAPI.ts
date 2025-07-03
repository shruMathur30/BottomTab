export interface TabItem {
  name: string;
  componentKey: string;
  icon: string;
  index: number;
  visible: boolean;
}

export const fetchTabsFromAPI = (): Promise<TabItem[]> => {
  return Promise.resolve([
    {
      name: 'Home',
      componentKey: 'Home',
      icon: 'home-outline',
      index: 0,
      visible: true,
    },
    {
      name: 'Search',
      componentKey: 'Search',
      icon: 'search-outline',
      index: 1,
      visible: true,
    },
    {
      name: 'Offers',
      componentKey: 'Offers',
      icon: 'pricetags-outline',
      index: 2,
      visible: false,
    },
    {
      name: 'Notifications',
      componentKey: 'Notifications',
      icon: 'notifications-outline',
      index: 3,
      visible: true,
    },
    {
      name: 'Profile',
      componentKey: 'Profile',
      icon: 'person-outline',
      index: 4,
      visible: true,
    },
  ]);
};