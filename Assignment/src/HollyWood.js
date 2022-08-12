/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CaresoledataHollywood from './component/HollyWoodCaresole';
import {
  load_h_Product,
  addSave,
  addFavorite,
  addLike,
  RemoveLike,
  RemoveFavorite,
} from './actions';

class HollyWoodMovies extends React.Component {
  load_h_Product = () => {
    this.props.dispatchLoadHollyWoodMovies(this.state);
  };
  addLike = product => {
    console.log(product);
    this.props.dispatchAddLike(product);
  };
  RemoveLike = product => {
    console.log(product);
    this.props.dispatchRemoveLike(product);
  };
  addSave = product => {
    console.log(product);
    this.props.dispatchAddProducts(product);
    alert('Save to watch letter');
  };
  addFavorite = product => {
    console.log(product);
    this.props.dispatchaddFavoriteVideo(product);
  };
  RemoveFavorite = FavoriteMovies => {
    console.log(FavoriteMovies);
    this.props.dispatchRemoveFavorite(FavoriteMovies);
  };

  render() {
    const {HollyWoodMovies} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.Caresole}>
          <CaresoledataHollywood />
        </View>
        <ScrollView style={styles.BooksContainer}>
          {HollyWoodMovies.map((HollyWoodMovies, index) => (
            <TouchableOpacity
            style={{
              marginRight: 8,
              alignSelf: 'center',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              this.props.navigation.navigate('DetailsPage', {
                Movies: HollyWoodMovies,
              });
            }}>
            <View style={styles.book} key={index}>
              <Image
                style={styles.Image}
                source={{
                  uri: HollyWoodMovies.imageUrl,
                }}
              />
              <View style={{padding: 5}}>
                <Text style={styles.name}>{HollyWoodMovies.name}</Text>
                <Text style={styles.details}>
                  PRICE = {HollyWoodMovies.genre}
                </Text>
                <Text style={styles.details}>{HollyWoodMovies.director}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 180,
                    height: 40,
                    marginTop:10,
                    alignItems: 'center',
                  }}>
                  <View>
                    {!this.props.LikeMovie.find(
                      element => element._id == HollyWoodMovies._id,
                    ) ? (
                      <TouchableOpacity
                        onPress={() => this.addLike(HollyWoodMovies)}
                        style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/UnLike.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => this.RemoveLike(HollyWoodMovies)}
                        style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/Like.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'green',
                    }}
                    onPress={() => this.addSave(HollyWoodMovies)}>
                    <Text style={{color: '#fff', fontSize: 12}}>
                      Watch Letter
                    </Text>
                  </TouchableOpacity>
                  <View>
                    {!this.props.FavoriteMovie.find(
                      element => element._id == HollyWoodMovies._id,
                    ) ? (
                      <TouchableOpacity
                        onPress={() => this.addFavorite(HollyWoodMovies)}
                        style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/unfavorit.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => this.RemoveFavorite(HollyWoodMovies)}
                        style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/favorite.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
  Image: {
    flex: 1,
    height: 120,
    marginRight: 20,
    marginLeft: 5,
    borderRadius: 10,
  },

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
    color: 'white',
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },

  book: {
    width: '90%',
    height: 140,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 10,
    // borderWidth: 0.2,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf:'center',
    color: 'red',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
});

const mapDispatchToProps = {
  dispatchLoadHollyWoodMovies: HollyWoodMovies =>
    load_h_Product(HollyWoodMovies),
  dispatchAddProducts: product => addSave(product),
  dispatchaddFavoriteVideo: product => addFavorite(product),
  dispatchAddLike: product => addLike(product),
  dispatchRemoveLike: product => RemoveLike(product),
  dispatchRemoveFavorite: FavoriteMovies => RemoveFavorite(FavoriteMovies),
};

const mapStateToProps = state => ({
  HollyWoodMovies: state.ProductReducer.HollyWoodMovies,
  LikeMovie: state.ProductReducer.LikeMovie,
  FavoriteMovie: state.ProductReducer.FavoriteMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(HollyWoodMovies);
