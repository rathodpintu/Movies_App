/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
class Details extends React.Component{
  render() {
    console.log(this.props.route.params.Movies);
    return (
          <View style={styles.book}>
            <View>
              <ImageBackground
                style={{height: 300, width: 300, alignSelf: 'center', borderRadius:2}}
                source={{
                  uri: this.props.route.params.Movies.imageUrl,
                }}
              />
            </View>
            <View style={{padding: 5}}>
              <Text style={styles.name}>Movie: {this.props.route.params.Movies.name}</Text>
              <Text style={styles.details}>GENRE = {this.props.route.params.Movies.genre}</Text>
              <Text style={styles.details}>OVERVIEW = {this.props.route.params.Movies.overview}</Text>
              <Text style={styles.details}>DIRECTOR= {this.props.route.params.Movies.director}</Text>
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-around', marginTop:5}}>
            <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 10,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'green',
                }}>
                <Text style={{color: '#fff', fontSize: 12}}>Favorite</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 10,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'green',
                  marginLeft:8,
                }}>
                <Text style={{color: '#fff', fontSize: 12}}>Watch Letter</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
  }
}
export default Details;




// import * as React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
//   Button,
// } from 'react-native';

// export default function Details({route}) {
//   const {Movies} = route.params;
//   return (
//     <View style={styles.book}>
//       <View>
//         <ImageBackground
//           style={{height: 300, width: 300, alignSelf: 'center', borderRadius:2}}
//           source={{
//             uri: Movies.imageUrl,
//           }}
//         />
//       </View>

//       <View style={{padding: 5}}>
//         <Text style={styles.name}>Movie: {Movies.name}</Text>
//         <Text style={styles.details}>GENRE = {Movies.genre}</Text>
//         <Text style={styles.details}>OVERVIEW = {Movies.overview}</Text>
//         <Text style={styles.details}>DIRECTOR= {Movies.director}</Text>
//       </View>

//       <View style={{ flexDirection:'row', justifyContent:'space-around', marginTop:5}}>
//       <TouchableOpacity
//           style={{
//             height: 50,
//             borderRadius: 10,
//             width: 100,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'green',
//           }}>
//           <Text style={{color: '#fff', fontSize: 12}}>Favorite</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             height: 50,
//             borderRadius: 10,
//             width: 100,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'green',
//             marginLeft:8,
//           }}>
//           <Text style={{color: '#fff', fontSize: 12}}>Watch Letter</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
    backgroundColor: 'black',
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 10,
  },

  book: {
    padding: 20,
    flexDirection: 'column',
    borderBottomWidth: 2,
    backgroundColor: 'lightcyan',
    borderRadius: 40,
  },
  name: {
    fontSize: 25,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  details: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    marginTop:8,
  },
});

// // function Details(){
// //         return (
// //             <Text>
// //                 {/* {this.props.route.params.name} */}
// //                 Like
// //             </Text>
// //         );
// // }
// // export default Details;
