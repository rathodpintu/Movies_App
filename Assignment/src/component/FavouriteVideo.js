/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
  Image,
  ImageBackground,
} from 'react-native';
import { addFavorite,loadProduct,RemoveFavorite } from '../actions';

class FavouriteVideo extends React.Component {

  RemoveFavorite = FavoriteMovies => {
    console.log(FavoriteMovies);
    this.props. dispatchRemoveFavorite(FavoriteMovies);
  };
  render() {
    const { FavoriteMovie  } = this.props;
    console.log(FavoriteMovie );
    return (
        <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          {FavoriteMovie.map((FavoriteMovies, index) => (
            <View style={styles.book} key={index}>
              <View>
                <ImageBackground
                  style={styles.Image}
                  source={{
                    uri: FavoriteMovies.imageUrl,
                  }} />
              </View>
              <View style={{padding: 5, marginLeft:25}}>
                <Text style={styles.name}>{FavoriteMovies.name}</Text>
                <Text style={styles.details}>PRICE = {FavoriteMovies.genre}</Text>
                <Text style={styles.details}>
                  Rating = {FavoriteMovies.imdbRating}
                </Text>
                <Text style={styles.details}>{FavoriteMovies.director}</Text>
                <View style={{flexDirection: 'row'}}>
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
                  onPress={() => this.RemoveFavorite(FavoriteMovies)}>
                  <Text style={{color: 'white', alignSelf: 'center'}}>
                    Remove Like
                  </Text>
                </TouchableOpacity>
                </View>
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
  Image: {height: 120, width: 100},
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
  dispatchLoadProducts: products => loadProduct(products),
  dispatchAddBook: FavoriteMovies => addFavorite(FavoriteMovies),
  dispatchRemoveFavorite: FavoriteMovies => RemoveFavorite(FavoriteMovies),
};

const mapStateToProps = state => ({
    // FavoriteMovie: state.ProductReducer.FavoriteMovie,
    FavoriteMovie: state.ProductReducer.FavoriteMovie,

});
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteVideo);
