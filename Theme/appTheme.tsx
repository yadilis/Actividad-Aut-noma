import { StyleSheet } from "react-native";
import { SECUNDARY_COLOR } from "../src/commons/contans";

export const styles = StyleSheet.create({

    global: {
        
        color: SECUNDARY_COLOR, 
        paddingHorizontal: 30,
        paddingVertical:100,
        fontSize: 30, 
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        textTransform: 'uppercase', 
        letterSpacing: 2, 
        fontFamily: 'Roboto', 
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,

      },
      contentBody:{
        backgroundColor:SECUNDARY_COLOR,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:40,
        paddingTop:40
      },
      imageContainer: {
        alignItems: 'center',
        marginBottom: 40, 
      },
      button: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase', 
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Color de fondo global
        padding: 20,
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'cover', // Ajusta el modo de redimensionamiento según tus necesidades
        marginBottom: 20,
      },


      
});