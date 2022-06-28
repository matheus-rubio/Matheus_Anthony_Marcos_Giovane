import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Avatar, IconButton } from "react-native-paper";
import { ScreenRoutes } from "../Enums/ScreenRoutes";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import AppDrawerContent from "./AppDrawerContent";
import { useNavigation } from "@react-navigation/native";

const DrawerStack: React.FC = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#2F72BC" },
        headerTintColor: "#FFFFFF",
        drawerStyle: { backgroundColor: "#2F72BC" },
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#a8a8a8",
        headerRight: () => (
          <IconButton
            style={{ borderWidth: 2, borderColor: "#FFFFFF", marginRight: 16 }}
            icon={() => (
              <Avatar.Image
                size={32}
                source={require("../Assets/no-profile-photo.jpg")}
              />
            )}
            size={22}
            onPress={() => navigation.navigate(ScreenRoutes.PROFILE as never)}
          />
        ),
      }}
      drawerContent={(props) => <AppDrawerContent {...props} />}
    >
      <Drawer.Screen name={ScreenRoutes.HOME} component={Home} />
      <Drawer.Screen
        name={ScreenRoutes.PROFILE}
        component={Profile}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
