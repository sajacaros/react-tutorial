import React from 'react';
import Button from '../ch04/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ label }) {
  return (
    <>
      <Consumer
        children={({ loading = false, setLoading }) => (
          <Button onPress={() => setLoading('loading', !loading)}>
            {loading ? '로딩중' : label}
          </Button>
        )}
      />
      <Consumer>
        {({ loading = false, setLoading }) => (
          <Button onPress={() => setLoading('loading', !loading)}>
            {loading ? '로딩중' : label}
          </Button>
        )}
      </Consumer>
      <Consumer>
        {({ loading2 = false, setLoading }) => (
          <Button onPress={() => setLoading('loading2', !loading2)}>
            {loading2 ? '로딩중' : label}
          </Button>
        )}
      </Consumer>
      <Consumer>
        {({ loading = false, loading2 = false }) => (
          <Button>{loading && loading2 ? '로딩중' : label}</Button>
        )}
      </Consumer>
    </>
  );
}

export default ButtonWithNewConsumer;
