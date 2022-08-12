/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const images = [
  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  'https://epcms.epicon.in/featured-images/1625823143-aatma-thumbnailbanner-1-580x380.jpg',
  'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8284/388284-h',
  'https://www.socialsamosa.com/wp-content/uploads/2020/02/5-4.png',
  'https://www.researchgate.net/profile/Stefan-Bolea/publication/309717420/figure/fig1/AS:425102790664192@1478363811754/Fight-Club-movie-poster-1999.png',
];

export default class CaresoledataHollywood extends React.Component {
  state = {
    activeColor: 0,
  };
  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.activeColor) {
      this.setState({activeColor: slide});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{width, height}}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.dotting}>
          {images.map((x, y) => (
            <Text
              key={y}
              style={
                y == this.state.activeColor
                  ? styles.dotcolor
                  : styles.Activedotcolor
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  dotting: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dotting1: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: 10,
    width: 10,
  },

  dotcolor: {
    color: '#888',
    margin: 3.5,
  },
  Activedotcolor: {
    color: '#fff',
    margin: 3.5,
  },
});
