import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../pages/home/index';
import Detalhes from '../pages/detalhes/detalhes';
import TestPage from '../pages/teste_page'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";



import  MaterialCommunityIcons  from "@expo/vector-icons/MaterialCommunityIcons";
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default function Routes(){



    return(
        
        <NavigationContainer independent={true}>
    
                    <Drawer.Navigator initialRouteName="Home">
                            <Drawer.Screen name="Home"  component={HomeScreen}/>
                    </Drawer.Navigator>


                    {/* <Tab.Navigator >

                        <Tab.Screen
                            name="Home"
                            component={TestPage}
                            options={{
                                headerShown:false,

                                tabBarIcon:()=>(
                                    <MaterialCommunityIcons name="home"
                                    size={20} color='gray'
                                    />
                                )
                            }}
                        />


                            <Tab.Screen
                            name="List"
                            component={HomeScreen}
                            options={{
                                headerShown:false,
                                tabBarIcon:()=>(
                                    <MaterialCommunityIcons name="apps"
                                    size={40} color='gray'
                                    />
                                )
                            }}
                        />



                    </Tab.Navigator> */}

                {/* <Stack.Navigator>

                    <Stack.Screen  
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerTitle:"Listar Usuários"}} />


                    <Stack.Screen  
                    name="Detalhe" 
                    component={Detalhes} 
                    options={{headerTitle:"Detalhes do Usuário"}}
                  
                    />
                    
                
                </Stack.Navigator> */}

        </NavigationContainer>


    )


}






