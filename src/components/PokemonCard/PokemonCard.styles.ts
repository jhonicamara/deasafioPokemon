import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pokemonInformationContainer: {
    flex: 1,

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,

    borderRadius: 20,

    margin: 20,
    paddingBottom: 10,
  },
  pokemonImage: {
    flex: 1,
    height: 200,
    resizeMode: 'contain',
  },
  pokemonNameText: {
    fontSize: 30,
    fontWeight: '700',

    textAlign: 'center',
  },
});
