import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

const ReactApollo = require('react-apollo');
const Redux = require('react-redux');

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const mockState = {
  nutrition: [],
  selectedIds: [],
};

jest.mock('react-apollo', () => ({
  ...ReactApollo,
  useQuery: jest.fn().mockImplementation(() => ({
    data: mockState.nutrition,
    refetch: () => {},
  })),
}));

jest.mock('react-redux', () => ({
  ...Redux,
  useDispatch: jest.fn().mockImplementation(() => {}),
  useSelector: jest.fn().mockImplementation(() => {
    return mockState;
  }),
}));
