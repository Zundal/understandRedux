import React from 'react';
import {Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const TestRedux = () => {
  const dispatch = useDispatch();
  const cnt = useSelector(state => state.counter);
  console.log(cnt);

  const execButtonPlus = () => {
    dispatch({type: 'INCREASE_COUNTER'});
  };

  const execButtonMinus = () => {
    dispatch({type: 'DECREASE_COUNTER'});
  };

  return (
    <>
      <Button title="plus" onPress={execButtonPlus} />
      <Button title="minus" onPress={execButtonMinus} />
    </>
  );
};

export default TestRedux;
