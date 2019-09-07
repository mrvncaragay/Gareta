import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/selectors';

// Shared components
import Spinners from '../Spinners/';
import Fade from '../Fade';
import CollectionsOverview from './index';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinners,
  Fade
)(CollectionsOverview);

export default CollectionsOverviewContainer;
