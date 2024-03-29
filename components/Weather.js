import {View, Text, Image, StyleSheet} from 'react-native'
import React, {useEffect,useState} from 'react'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')



    useEffect(() => {
        const url = api.url +
        'lat=' + props.latitude +
        '&lon=' + props.longitude +
        '&appid=' + api.key +
        '&units=metric' 

        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setTemp(json.main.temp)
                
                setDescription(json.weather[0].description)
                setIcon(api.icons + json.weather[0].icon + '@2x.png')
                console.log(icon)
            })
            .catch((error) => {
                setDescription("Error retrieving weather information.")
                console.log(error)
            })
    },  [])

    return (
        <View>
            <Text style={styles.temp}>{temp}</Text>
            {icon &&
            <Image source={{uri: icon}} style={{width: 100, height: 100}} />
            }
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    temp: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'black',
      textAlign: 'center' ,
      backgroundColor: 'red',

    },
    description: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        textAlign: 'center' ,
        backgroundColor: 'red'

    }
    
  });
