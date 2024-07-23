import React from 'react';
import {TitleList,Container, RowData,InfoData, BtnView,Pagination,PaginationText,PaginationTextActive} from '../../app/styles/custom_adm'
import { ScrollView ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  interface INavigate{
    navigate:(data1:string,data2:object)=>void

    
  }
 
  const arr = []
  const navigation:INavigate= useNavigation()

    for(let i = 1;i<40;i++){

      arr.push(`Denis - ${i}`)

    }


  return (

    <ScrollView>
    <Container>

      {/* <TitleList>Hello</TitleList> */}

      {arr.map((it:string,index:number)=>{
      return(
      <RowData key={index}>
      <InfoData>{it}</InfoData>
      
      <TouchableOpacity onPress={()=>{navigation.navigate
        ('Detalhe',{name:it})}}>
      <BtnView> Detalhes</BtnView>
      </TouchableOpacity>
   
        
      </RowData>
  )
      })}
      


      <Pagination>

          <PaginationText>Primeira</PaginationText>
          <PaginationTextActive>2</PaginationTextActive>
          <PaginationText>3</PaginationText>
          <PaginationText>4</PaginationText>

          <PaginationText>Última</PaginationText>


      </Pagination>


    </Container>

    </ScrollView>
  );
}


