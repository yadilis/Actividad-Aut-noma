import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../src/commons/contans";

export const styles = StyleSheet.create({
    globalTitle: {
      color: SECUNDARY_COLOR,
      fontSize: 26,
      paddingHorizontal: 30,
      paddingVertical: 30,
      fontWeight: 'bold'
    },
  contentBody: {
      backgroundColor: SECUNDARY_COLOR,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 19,
      paddingHorizontal: 40,
      paddingTop: '20%'
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50, 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10, 
    resizeMode: 'cover', 
  },
  titleHeaderBody: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: SECUNDARY_COLOR,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Roboto',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
    marginBottom: 50,
   

},
textBody: {
  fontSize: 16
},
inputText: {
  backgroundColor: INPUT_COLOR,
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 20
},
contentInput: {
  marginTop: 20,
  gap: 20
},
button: {
  backgroundColor: PRIMARY_COLOR,
  paddingVertical: 15,
  paddingHorizontal: 90, 
  borderRadius: 10,
  marginTop: 30,
  elevation: 3, 
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3, 
  shadowRadius: 2, 
},
buttonText: {
  color:'black',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center'
}


  
});