import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../pages/home/index';
import Detalhes from '../pages/detalhes/detalhes';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator()


export default function Routes(){

    return(
        
        <NavigationContainer independent={true}>
    
                <Stack.Navigator>

                    <Stack.Screen  
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerTitle:"Listar Usuários"}} />


                    <Stack.Screen  
                    name="Detalhe" 
                    component={Detalhes} 
                    options={{headerTitle:"Detalhes do Usuário"}}
                  
                    />
                    
                
                </Stack.Navigator>

        </NavigationContainer>


    )


}






