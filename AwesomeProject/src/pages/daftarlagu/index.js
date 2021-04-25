//////---------------------FIX PROJECT FINAL--------------------------------------------------------
import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, SafeAreaView, Modal, Pressable } from 'react-native'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'

const DaftarLagu = () => {

  const [filterData, setfilterData] = useState([])
  const [masterData, setmasterData] = useState([])
  const [search, setsearch] = useState('')
  const [showWarning, setShowWarning] = useState(false); // untuk memunculkan modal box
  const [selectedUser, setselectedUser] = useState([]) // untuk memunculkan data didalam modal box
 

  ////---------------------------> Function Memanggil API menggunakan Axios<------------------------------------------
  useEffect(() => {
    AxiosPosts();
    return () => {
    
    }
  }, [])

  const AxiosPosts =()=>{
    const apiURL = 'http://10.0.2.2:3004/data';
    axios.get(apiURL)
    .then((response) => {
      setfilterData(response.data);
      setmasterData(response.data);
    }). catch((error) =>{
      console.error(error);
    })
  }
////-------------------------------------------------------------------------------------------------------------


/////---------------------------------Function untuk search------------------------------------------------------
const searchFilter = (text) =>{
  if(text){
    const newData = masterData.filter((item)=>{
      const itemData = item.Judul ?
                item.Judul.toUpperCase()
                :''. toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setfilterData(newData);
    setsearch(text);
  }else{
    setfilterData(masterData);
    setsearch(text);
  }
}
/////----------------------------------------------------------------------------------------------------------------


const onPressHandler = ()=>{setShowWarning(true);} // Function menyalakan dan modal box

const isiLagu = (item) =>{setselectedUser(item)} // Function untuk mengisi isi lagu ke da lagu yang dipilih



////-----------------------------------Function pada flatList--------------------------------------------------------------------

  const ItemView =({item})=>{
     return(
      
      <TouchableOpacity style={{ MouseCursor: 'hover',borderWidth:1, margin: 10, backgroundColor: 'white', borderColor: 'white', borderRadius: 40}}
      onPress={
        ()=>{
          onPressHandler();
          isiLagu(item);
        }
      }
      >
          <Text style ={styles.itemStyle}>
            {item.Nomor}{'. '}{item.Judul.toUpperCase()}
          </Text>
       </TouchableOpacity>
       )
  }

  const itemSeparatorView = () =>{
    return(
      <View
        style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c'}}
      />
    )
  }

////------------------------------------------------------------------------------------------

  return (
    <LinearGradient colors={['#FDA4A4', '#C25151', '#973C3C']} style={styles.linearGradient}>
    <SafeAreaView style ={{flex:1}}>    
             <Modal
                 visible={showWarning}
                 transparent
                 onRequestClose={()=>
                 setShowWarning(false)
                }> 
                    <View style={styles.centered_view}>
                      <View style ={styles.modal}>
                        <ScrollView>
                            <Text style={{marginLeft: 20, fontSize: 25,}}>{selectedUser.Nomor}. {selectedUser.Judul}</Text>
                            <Text style={{ marginLeft: 30,textAlign: 'left', paddingTop: 3,}}>Nada dasar :{selectedUser.NadaDasar}</Text>
                            <Text style={{ marginLeft: 30,textAlign: 'left', paddingTop: 3,}}>Birama :{selectedUser.Birama}</Text>
                            <Text style={{ marginLeft: 30,textAlign: 'left', paddingTop: 3,}}>pencipta :{selectedUser.Pengubah}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3,}}>{selectedUser.Ket1}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ayat1}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3}}>{selectedUser.Ket2}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ayat2}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3}}>{selectedUser.Ket3}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ayat3}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3}}>{selectedUser.Ket4}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ayat4}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3}}>{selectedUser.Ket5}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ayat5}</Text>
                            <Text style={{textAlign: 'center', paddingTop: 3}}>{selectedUser.KetRef}</Text>
                            <Text style= {styles.ayat}>{selectedUser.Ref}</Text>
                          </ScrollView>
                      <Pressable onPress={()=> setShowWarning(false)} style={{cursorActive: 'hover',backgroundColor: 'white'}} >
                      <Text style={{textAlign: 'center',color:'black', fontSize:17}}>Close</Text>
                    </Pressable>
                      </View>
                    </View>
                </Modal>

      <View style ={styles.container}> 
          <TextInput
           style={styles.textInputStyle}
           value={search}
           placeholder = "Masukan judul lagu"
           underlineColorAndroid= 'transparent'
           onChangeText={(text) => searchFilter(text)}
           />
    </View>       
          <FlatList
          data = {filterData}
          keyExtractor ={(item,index) => index.toString()}
          itemSeparatorComponent = {itemSeparatorView}
          renderItem ={ItemView}    
          />
    </SafeAreaView> 
    </LinearGradient>

  )
}

export default DaftarLagu

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  },
  itemStyle:{
    padding: 15,
    borderEndWidth: 2,
    borderColor: 'black'
  },
  textInputStyle:{
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  },
  centered_view:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  modal: {
    backgroundColor: 'white',
    paddingLeft: 8,
    flex: 1

  },
  ListSong:{
    borderWidth: 1, 
    padding:1, 
    margin: 2, 
    borderRadius: 4
  },
  ayat:{
    paddingLeft:30,
    paddingRight: 30,
    fontSize: 20
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})




