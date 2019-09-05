import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/selectors';

// Shared components
import Spinners from '../Spinners';
import CollectionsOverview from './index';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinners
)(CollectionsOverview);

export default CollectionsOverviewContainer;
