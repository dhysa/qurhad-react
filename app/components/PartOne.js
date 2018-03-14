import React from 'react';
import {Button} from 'react-native';


const  PartOne = props => {
  return (
      <Button title="Get Location" onPress={props.onGetLocation}/>
  );
};

export default PartOne;