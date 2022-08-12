/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-self-compare */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// import React from 'react';
// import {
//     View,
//     Text,
//     FlatList,
//     Image,
//     TouchableOpacity,
//     StyleSheet,
// } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { HollywoodMovies } from '../jsonFile/HollywoodData';
// import ProductReducer, {} from '../src/reducers/ProductReducer';

// function ProductList() {
//     const dispatch = useDispatch();
//    // const addItemToCart = item => dispatch({ type: ADD_LIKES, payload: item });

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={ProductReducer}
//                 keyExtractor={item => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.bookItemContainer}>
//                         <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
//                         <View style={styles.bookItemMetaContainer}>
//                             <Text style={styles.textTitle} numberOfLines={1}>
//                                 {item.name}
//                             </Text>
//                             <Text style={styles.textAuthor}>Release: {item.releaseYear}</Text>
//                             <View style={styles.buttonContainer}>
//                                 <TouchableOpacity
//                                     //onPress={addItemToCart}
//                                     style={styles.button}>
//                                     <Text style={styles.buttonText}>Add +</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     bookItemContainer: {
//         flexDirection: 'row',
//         padding: 10,
//     },
//     thumbnail: {
//         width: 100,
//         height: 150,
//     },
//     bookItemMetaContainer: {
//         padding: 5,
//         paddingLeft: 10,
//     },
//     textTitle: {
//         fontSize: 22,
//         fontWeight: '400',
//     },
//     textAuthor: {
//         fontSize: 18,
//         fontWeight: '200',
//     },
//     buttonContainer: {
//         position: 'absolute',
//         top: 110,
//         left: 10,
//     },
//     button: {
//         borderRadius: 8,
//         backgroundColor: '#24a0ed',
//         padding: 5,
//     },
//     buttonText: {
//         fontSize: 22,
//         color: '#fff',
//     },
// });

// export default ProductList;

/////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {
  loadProduct,
  addSave,
  addFavorite,
  addLike,
  RemoveLike,
} from './actions';
import CaresoledataBollywood from './component/Caresole';

class ProductList extends React.Component {
  loadProduct = () => {
    this.props.dispatchLoadProducts(this.state);
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
    const {products} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.Caresole}>
          <CaresoledataBollywood />
        </View>
        <ScrollView style={styles.BooksContainer}>
          {products.map((product, index) => (
             <TouchableOpacity
             style={{
               marginRight: 8,
               alignSelf: 'center',
               justifyContent: 'flex-end',
             }}
             onPress={() => {
               this.props.navigation.navigate('DetailsPage', {
                 Movies: product,
               });
             }}>
             <View style={styles.book} key={index}>
               <Image
                 style={styles.Image}
                 source={{
                   uri: product.imageUrl,
                 }}
               />
               <View style={{padding: 5}}>
                 <Text style={styles.name}>{product.name}</Text>
                 <Text style={styles.details}>
                   PRICE = {product.genre}
                 </Text>
                 <Text style={styles.details}>{product.director}</Text>
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
                       element => element._id == product._id,
                     ) ? (
                       <TouchableOpacity
                         onPress={() => this.addLike(product)}
                         style={{flexDirection: 'row'}}>
                         <Image
                           source={require('../../assets/UnLike.png')}
                           style={styles.icon}
                         />
                       </TouchableOpacity>
                     ) : (
                       <TouchableOpacity
                         onPress={() => this.RemoveLike(product)}
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
                     onPress={() => this.addSave(product)}>
                     <Text style={{color: '#fff', fontSize: 12}}>
                       Watch Letter
                     </Text>
                   </TouchableOpacity>
                   <View>
                     {!this.props.FavoriteMovie.find(
                       element => element._id == product._id,
                     ) ? (
                       <TouchableOpacity
                         onPress={() => this.addFavorite(product)}
                         style={{flexDirection: 'row'}}>
                         <Image
                           source={require('../../assets/unfavorit.png')}
                           style={styles.icon}
                         />
                       </TouchableOpacity>
                     ) : (
                       <TouchableOpacity
                         onPress={() => this.RemoveFavorite(product)}
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
  dispatchLoadProducts: products => loadProduct(products),
  dispatchAddProducts: product => addSave(product),
  dispatchaddFavoriteVideo: product => addFavorite(product),
  dispatchAddLike: product => addLike(product),
  dispatchRemoveLike: product => RemoveLike(product),
  dispatchRemoveFavorite: FavoriteMovies => RemoveFavorite(FavoriteMovies),
};

const mapStateToProps = state => ({
  products: state.ProductReducer.products,
  LikeMovie: state.ProductReducer.LikeMovie,
  FavoriteMovie: state.ProductReducer.FavoriteMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
