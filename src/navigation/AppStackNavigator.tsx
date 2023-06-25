const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={SceneName.Main} screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={SceneName.Main} component={DrawerNavigator} />
      <AppStack.Screen name={SceneName.AddRecord} component={AddRecordView} /> 
    </AppStack.Navigator>
  );
};