import { Button, StyleSheet, Text, View } from 'react-native';

// navigation is a prop that is included on every screen in teh Stack
// it comes from React Navigation library
// Contain functions and variables that help you do navigation



const Screen2 = ({navigation}) => {
    const buttonpressed = () => {
        console.log('open details screen')
        // specify the name / route of the screen you want to move to
        navigation.navigate('Details', {x: 'John', y: 100, z:true, a:[1,2,3]})
    }
    const buttonpressed2 = () => {
        console.log('open login screen')
        // specify the name / route of the screen you want to move to
        navigation.navigate('LoginScreen')
    }
    return (
        <View style={styles.container}>
            <Text>
                Here is the Screen #2
            </Text>
            <Button title='Go to next screen' onPress={buttonpressed} />
            <Button title='Go to Login Screen' onPress={buttonpressed2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Screen2

