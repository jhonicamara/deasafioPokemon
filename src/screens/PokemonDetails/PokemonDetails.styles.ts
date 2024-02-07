import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  pokemonImageContainer: {
    flexDirection: 'column',
    backgroundColor: '#D30A40',
    paddingHorizontal: 20,
    height: Dimensions.get('screen').height * 0.5,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  pokemonImage: {
    height: Dimensions.get('screen').height * 0.5,
    resizeMode: 'contain',
  },
  pokemonInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  pokemonInfoTextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  pokemonInfoTitleText: {
    fontSize: 18,
    fontWeight: '700',
    minWidth: Dimensions.get('screen').width * 0.5,
    maxWidth: Dimensions.get('screen').width * 0.5,
    marginRight: 10,
    color: '#000',
  },
  pokemonInfoText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
});
