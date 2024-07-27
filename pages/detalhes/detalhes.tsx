import { Container, TitleList } from "@/app/styles/custom_adm"
import { RouteProp, useRoute } from '@react-navigation/native';

 const Detalhes=()=>{

    const route:any = useRoute();
    const { name } = route.params;
    // console.log(name)
    return(

        <Container>

        <TitleList>{name}</TitleList>
            
        </Container>
    )


}

export default Detalhes