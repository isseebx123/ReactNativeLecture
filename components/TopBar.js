import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class TopBar extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text></Text>
                <Text style={{fontSize:20}}>{this.props.title}</Text>
                <Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default TopBar;