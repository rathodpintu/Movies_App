/* eslint-disable prettier/prettier */
/* eslint-disable no-fallthrough */

import {
  LOAD_PRODUCTS,
  ADD_TO_SAVE,
  ADD_TO_FAVORITE,
  ADD_TO_LIKE,
  REMOVE_LIKE_ITEM,
  REMOVE_TO_SAVE,
  REMOVE_TO_FAVORITE,
  LOAD_HollyWoodMovies,
} from '../actions';

const initialState = {
  saveVideo: [],
  FavoriteMovie: [],
  LikeMovie: [],
  products: [
    {
      _id: '11',
      name: 'Pushpa',
      releaseYear: 2001,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg',
    },
    {
      _id: '12',
      name: 'Dear Comrade',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:
        'https://static.toiimg.com/photo/msid-70406377/70406377.jpg?176147',
    },
    {
      _id: '13',
      name: 'K.F.G',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:
        'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/1106748-kgf-chapter-2-to-get-p_1200x768-sixteen_nine.jpeg?size=948:533',
    },
    {
      _id: '14',
      name: 'Shiddat',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl: 'https://static.toiimg.com/photo/86284625.cms',
    },
  ],
  HollyWoodMovies: [{
    '_id': '1',
   'name': 'Fight Club',
    'releaseYear': 1999,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'Drama',
    'imdbRating': 8.8,
    'overview': 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    'imageUrl': 'https://www.researchgate.net/profile/Stefan-Bolea/publication/309717420/figure/fig1/AS:425102790664192@1478363811754/Fight-Club-movie-poster-1999.png',
    'director': 'David Fincher',
},{
    '_id': '2',
    'name': 'Uncharted',
    'releaseYear': 2022,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 8.8,
    'overview': 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    'imageUrl': 'https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg',
    'director': 'Ruben Fleischer',
},{
    '_id': '3',
    'name': 'Eternals',
    'releaseYear': 2021,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 7.8,
    'overview': 'With Eternals, Academy Award winning director of Nomadland, Chloé Zhao sinks her teeth into the heart of American pop culture — the MCU.',
    'imageUrl': 'https://images.thedirect.com/media/article_full/eternals-review-mcu.jpg',
    'director': 'CHLOE ZHAO',
},{
    '_id': '4',
    'name': 'Avatar',
    'releaseYear': 2009,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 9.8,
    'overview': "It is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi ",
    'imageUrl': 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
    'director': 'James Cameron',
},{
    '_id': '5',
    'name': 'The Dark Knight',
    'releaseYear': 2008,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 9.8,
    'overview': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. ',
    'imageUrl': 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'director': 'Christopher Nolan',
},
{
    '_id': '6',
    'name': 'The Matrix',
    'releaseYear':1990,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 8.8,
    'overview': 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence. ',
    'imageUrl': 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    'director': 'Lana Wachowski',
},
{
    '_id': '7',
    'name': 'Star Wars',
    'releaseYear':1977,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 7.8,
    'overview': "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue ",
    'imageUrl': 'https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=960',
    'director': 'George Lucas',
},{
    '_id': '8',
    'name': 'Gladiator',
    'releaseYear':2000,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'action',
    'imdbRating': 7.8,
    'overview': 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    'imageUrl': 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    'director': 'George Lucas',
},
{
    '_id': '9',
    'name': 'Joker ',
    'releaseYear':2019,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'drama',
    'imdbRating': 8.3,
    'overview': 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
    'imageUrl': 'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
    'director': 'Todd Phillips',
},
{
    '_id': '10',
    'name': 'Jaws',
    'releaseYear':1975,
    'certificate': 'A',
    'runtime': '139 min',
    'genre': 'drama',
    'imdbRating': 8.3,
    'overview': "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1W517JeKbIMHFuTkSauSdK68uNBhY0zz-A&usqp=CAU',
    'director': 'Steven Spielberg',
}],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: [...state.products, action.products],
      };
      case LOAD_HollyWoodMovies:
        return {
         HollyWoodMovies: [...state.HollyWoodMovies, action.HollyWoodMovies],
        };

    case ADD_TO_SAVE:
      const index = state.saveVideo.find(m => m._id === action.payload._id);
      if (!index) {
        return {
          ...state,
          saveVideo: [...state.saveVideo, action.payload],
        };
      } else {
        return {...state, saveVideo: [...state.saveVideo]};
      }

      case REMOVE_TO_SAVE:
        console.log('remove from Save is working');
        const removeSave = state.saveVideo.find(
          item => item._id === action.payload._id,
        );
        console.log(removeSave);
        if (removeSave) {
          const data = state.saveVideo.filter(
            movie => movie._id !== action.payload._id,
          );
          return {
            ...state,
            saveVideo: data,
          };
        }

    case ADD_TO_FAVORITE:
      const indexFev = state.FavoriteMovie.find(
        m => m._id === action.payload._id,
      );
      if (!indexFev) {
        return {
          ...state,
          FavoriteMovie: [...state.FavoriteMovie, action.payload],
        };
      } else {
        return {...state, FavoriteMovie: [...state.FavoriteMovie]};
      }

    case REMOVE_TO_FAVORITE:
      console.log('remove from Save is working');
      const removeFavorite = state.FavoriteMovie.find(
        item => item._id === action.payload._id,
      );
      console.log(removeFavorite);
      if (removeFavorite) {
        const data = state.FavoriteMovie.filter(
          movie => movie._id !== action.payload._id,
        );
        return {
          ...state,
          FavoriteMovie: data,
        };
      }

    case ADD_TO_LIKE:
      const indexLike = state.LikeMovie.find(m => m._id === action.payload._id);
      if (!indexLike) {
        return {
          ...state,
          LikeMovie: [...state.LikeMovie, action.payload],
        };
      } else {
        return {...state, LikeMovie: [...state.LikeMovie]};
      }

    case REMOVE_LIKE_ITEM:
      console.log('remove from fav is working');
      const removeLike = state.LikeMovie.find(
        item => item._id === action.payload._id,
      );
      console.log(removeLike);
      if (removeLike) {
        const data = state.LikeMovie.filter(
          movie => movie._id !== action.payload._id,
        );
        return {
          ...state,
          LikeMovie: data,
        };
      }
    // const index1 = state.LikeMovie.find(
    //   m => m._id === action.payload._id,
    // );
    // return {
    //   ...state,
    //   LikeMovie: [
    //     ...state.LikeMovie.slice(0, index1),
    //     ...state.LikeMovie.slice(index1 + 1),
    //   ],
    //   // ...state,
    //   // LikeMovie: state.LikeMovie.filter(
    //   //   LikeMovies => LikeMovies.id !== action.payload.id,
    //   // ),
    // };
    // const index = state.products.findIndex(product => product.id === action.product.id);

    // return {
    //   products: [
    //     ...state.products.slice(0, index),
    //     ...state.products.slice(index + 1),
    //   ],
    //   // LikeMovie: state.LikeMovie.filter(
    //   //   products => products.id !== action.payload.id,

    // };
    default:
      return state;
  }
};

export default ProductReducer;
