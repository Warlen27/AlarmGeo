import styled from 'styled-components/native';


import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: #8e4dff;
`;

export const Label = styled.Text`
    margin-top: 70%;
    text-align: center;
    font-size: 24px;
    color: #fff;
`;

export const Radius = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background: rgba(142,77,255,.4);
  border: 1px solid rgb(142,77,255);
  justify-content: center;
  align-items: center;
`;

export const UserLocal = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: #8e4dff;
  border: 1px solid #fff;
`;


export const Button = styled.TouchableOpacity`
   position: absolute;
   z-index: 5;
   bottom: 50px;
   right: 20px;
   width: 60px ;
   height: 60px;
   background-color: #8e4dff;
   justify-content: center;
   align-items: center;
   border-radius: 30px;
`;



export const List = styled.FlatList`
  position: absolute;
  bottom: 10px;
  width: 100%;
  max-height: 300px;
`;

export const ListItem = styled.View`
   width: ${width - 40}px;
   max-height: ${height - 350}px;
   border-radius: 10px;
   margin: 0 20px;
`;

export const Thumbnail = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContainerTitle = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: #f1f1f1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    width: 70%;
    color: #000;
`;