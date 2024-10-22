import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

export default function City({weatherData}) {
  const {
    container,
    image,
    cityText,
    cityName,
    countryName,
    popContainer,
    rowLayout,
    popText,
    riseWrapper,
    riseSetText
  } = styles
  const {country, population, sunrise, sunset, name} = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={image}>
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[popContainer, rowLayout]}>
          <IconText
            iconColor="red"
            iconName="user"
            text={`Population: ${population}`}
            textStyles={popText}
          />
        </View>
        <View style={[riseWrapper, rowLayout]}>
          <IconText
            iconColor="white"
            iconName="sunrise"
            text={moment(sunrise).format('h:mm:ss a')}
            textStyles={riseSetText}
          />
          <IconText
            iconColor="white"
            iconName="sunset"
            text={moment(sunset).format('h:mm:ss a')}
            textStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 10
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  popContainer: {
    justifyContent: 'center'
  },
  popText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  riseWrapper: {
    justifyContent: 'space-around'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
