import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/selectors';

// Shared components
import { Spinners, Fade } from '../../components';

import CollectionPage from './index';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinners,
  Fade
)(CollectionPage);

export default CollectionPageContainer;
