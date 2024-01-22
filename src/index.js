import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ShowManga from "./screens/ShowManga";
import SearchManga from "./screens/SearchManga";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="TabsNavigation"
                    component={TabsNavigation}
                    options={{ 
                        headerShown: false 
                    }}>                        
                    </Stack.Screen>
                <Stack.Screen 
                    name="ShowManga"
                    component={ShowManga}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tabs = createMaterialBottomTabNavigator()

function TabsNavigation(){
    return (
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: "Home",
                }}
                />
            <Tabs.Screen 
                name='Busca'
                component={SearchManga}
                options={{
                    tabBarLabel: 'Buscar Mangá'
                }}
            />
        </Tabs.Navigator>
    )
}