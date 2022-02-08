import React from 'react';
import {Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const TestRedux = () => {
  const dispatch = useDispatch();
  const cnt = useSelector(state => state.counter);
  console.log(cnt);

  const execButton = () => {
    dispatch({type: 'INCREASE_COUNTER', payload: '1'});
  };

  return (
    <>
      <Button title="plus" onPress={execButton} />
    </>
  );
};

export default TestRedux;
