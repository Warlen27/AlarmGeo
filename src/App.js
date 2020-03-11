import React, { useState, useEffect} from 'react';
import MapView, { Marker, } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Notification from './services/Notification'
import Search from './components/Search';
import Directions from './components/Directions';
import { mapStyle, places } from './utils';
import { 
  Radius, 
  UserLocal, 
  Container, 
  Label, 
  List,
  ListItem,
  Thumbnail,
  ContainerTitle,
  Title,
  Button   
} from './styles';



 export default function App(){
 
  const [location, setLocation] = useState(undefined);
  const [destination, setDestination] = useState(null);
 
  let _watchId;
 
  useEffect(() => {
    async function getLocation() {
        const  granted  = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Localização',
            message: 'A aplicação precisa da permissão de localização.',
          },
          );

	 if(granted === PermissionsAndroid.RESULTS.GRANTED) {
    _watchId =  Geolocation.watchPosition(
            ({ coords: { latitude, longitude } }) => {
             
              setLocation({latitude, longitude});
            },
            (err) => console.log(err),
            {
              
              enableHighAccuracy: true,
              distanceFilter: 0,
              interval: 5000,
              fastestInterval: 2000,
            },

        );
        return () => {
          if (_watchId !== null) {
            Geolocation.clearWatch(_watchId);
          }
        };
            
          }
        }
    
    getLocation();
  }, []);
  

  function handleLocationSelected(data, { geometry }){
      const { location: { lat: latitude, lng: longitude } } = geometry;

      setDestination({
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      })
  }

  function handleLocationImage(item){
    const id =  item -1;

    const { latitude, longitude } = places[id];

    setDestination({
      latitude,
      longitude
    })
  }

    function alarm() {
      Notification
      .configure()
      .localNotification({
        color: '#8e4dff',
        backgrounColor: 'red',
        message: 'Acorde você vai passar do ponto',
        soundName: 'alarm2.mp3',
        playSound: true,
	      repeatType : 'time',
       // autoCancel: true,
      });
    }

    let check = false;

  function triggersAlarm(result){
    console.log('a', location, destination, 'D', result.distance)
    mapView.fitToCoordinates(result.coordinates);
   
    if( result.distance < 0.100) {
      if(check == false){
        alarm()
      }
     
    }else {
      return;
    };
    check= true;
    };

  function cancelDestination() {
    setDestination(null)
  }  

  return (
   
    <Container>
    {location ? (
      <>
        <MapView
        style={{ flex: 1 }}
        customMapStyle = { mapStyle }
        mapType='standard'
        ref={el =>  mapView = el}
        initialRegion={{  
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>

            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              anchor={{ x: .4, y: .4 }}
            >
                <Radius>
                    <UserLocal  />
                </Radius>
           </Marker>

          { destination && (
            <>
            <Directions
              origin={{ 
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              destination={destination}
              onReady={triggersAlarm}
            />
            <Marker coordinate={destination}  anchor={{ x: 0, y: 0 }}>
              <Icon name="notifications-active" size={30} color='#FF1493' />

            </Marker>
            
            </>
            )}
        </MapView>
        

        { destination ? (
         <Button onPress={cancelDestination}>  
             <Icon name="chevron-left" size={50} color='#fff' />
          </Button>     
        ) : (
          <>
          <Search onLocationSelected={handleLocationSelected}/>
          <List
           data={places}
           keyExtractor={place => place._id}
           horizontal
           showsHorizontalScrollIndicator={false}
           pagingEnabled
           renderItem={({ item }) => (
               <ListItem>
                   <Button onPress={() => handleLocationImage(item._id)}>
                      <Icon name="notifications-active" size={40} color='#ffffff' />
                   </Button>
 
                   <Thumbnail source={{ uri: item.thumbnail_url}  } resizeMode={'cover'} />
                   <ContainerTitle>
                   <Title>{item.title}</Title>
                  
                 </ContainerTitle>
              </ListItem>
            )}
            />
          </>
        )}
        </>
       ): (
         
           <Label>Loading...</Label> 
     )}

 

          </Container>
                    
  );
};




