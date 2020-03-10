import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
       //top: Platform.select({ ios: 60, android: 40 }),
        top: 60,
       
      
   },
    textInputContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 50,
        marginHorizontal: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    textInput: {
        height: 50,
        margin: 0,
        borderRadius: 25,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { x: 4, y: 4 },
        elevation: 4,
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        fontSize: 18
    },
    listView: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        backgroundColor: '#8e4dff',
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        marginTop: 10,
      
    },
    description: {
        fontSize: 16,
        color:  '#fff',
    },
    row: {
        padding: 20,
        height: 58
    }
})
