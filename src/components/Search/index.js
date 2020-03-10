import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { styles } from './styles';
import { apiKey } from '../../utils';


export default function Search({ onLocationSelected }) {
  const [searchFocused, setSearchFocused] = useState(false);


  return <GooglePlacesAutocomplete 
            placeholder='Onde você quer acordar...'
            placeholderTextColor="#333"
            onPress={onLocationSelected}
            query={{
                key: apiKey,
                language: 'pt',
              }}
            textInputProps={{
                onFocus: () => setSearchFocused(true),
                onBlur: () => setSearchFocused(false),
                autoCapitalize: 'none',
                autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails={true}
            enablePoweredByContainer={false}
            styles={styles}
            
           
           
        />
}
