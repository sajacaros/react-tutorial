import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';

import { setCollection, setAge } from '../actions/collectionActions01';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';

const mapDispatchToProps = {
  setLoading,
  resetLoading,
  setUser,
  setCollection,
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
