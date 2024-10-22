import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({weatherData}) => {
  const {container, backgroundImg} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/weather.jpg')}
        style={backgroundImg}>
        <FlatList
          data={weatherData}
          renderItem={({item}) => <ListItem item={item} />}
          // ItemSeparatorComponent={() => (
          //   <View style={{backgroundColor: 'red', height: 5}} />
          // )}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: StatusBar.height || 0,
    backgroundColor: 'red'
  },
  backgroundImg: {
    flex: 1,
    paddingTop: 20
  }
})

export default UpcomingWeather
