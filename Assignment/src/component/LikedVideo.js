/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// import * as React from 'react';
// import { View,Text } from 'react-native';

// export default function LikedVideo(){
//     return (
//         <View>
//             <Text>
//                 LikedVideo
//             </Text>
//         </View>
//     );

// }

/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// import * as React from 'react';
// import { View,Text } from 'react-native';

// export default function FavouriteVideo(){
//     return (
//         <View>
//             <Text>
//             FavouriteVideo
//             </Text>
//         </View>
//     );

// }

/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {loadProduct, addLike, RemoveLike} from '../actions';

class LikedVideo extends React.Component {
  RemoveLike = LikeMovies => {
    console.log(LikeMovies);
    this.props.dispatchRemoveLike(LikeMovies);
  };
  render() {
    const {LikeMovie} = this.props;
    console.log(LikeMovie);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          {LikeMovie.map((LikeMovies, index) => (
            <View style={styles.book} key={index}>
              <View state={{borderTopRadius:50}}>
                <ImageBackground
                  style={styles.Image}
                  source={{
                    uri: LikeMovies.imageUrl,
                  }}
                />
              </View>
              <View style={{padding: 5, marginLeft:25 , backgroundColor:'white'}}>
                <Text style={styles.name}>{LikeMovies.name}</Text>
                <Text style={styles.details}>PRICE = {LikeMovies.genre}</Text>
                <Text style={styles.details}>
                  Rating = {LikeMovies.imdbRating}
                </Text>
                <Text style={styles.details}>{LikeMovies.director}</Text>
                <TouchableOpacity
                  style={{
                    marginRight: 8,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    height: 30,
                    width: 150,
                    borderWidth: 1,
                    borderRadius: 25,
                  }}
                  onPress={() => this.RemoveLike(LikeMovies)}>
                  <Text style={{color: 'white', alignSelf: 'center'}}>
                    Remove Like
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnIcon: {height: 20, width: 20},
  HaedCard: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: 'red',
  },
  Image: {height: 120, width: 100, },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  Caresole: {
    padding: 10,
    paddingRight: 50,
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
  },
  icon: {
    color: 'green',
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },

  book: {
    padding: 10,
    flexDirection: 'row',
    alignItems:'space-around',
    alignContent:'space-between',
    borderBottomWidth: 1,
    backgroundColor: 'azure',
  },
  name: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
});

const mapDispatchToProps = {
  // dispatchLoadProducts: products => loadProduct(products),
  dispatchAddBook: LikeMovies => addLike(LikeMovies),
  dispatchRemoveLike: LikeMovies => RemoveLike(LikeMovies),
};

const mapStateToProps = state => ({
  // FavoriteMovie: state.ProductReducer.FavoriteMovie,
  LikeMovie: state.ProductReducer.LikeMovie,
});
export default connect(mapStateToProps, mapDispatchToProps)(LikedVideo);
