import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Quotes from '../pages/Quotes';

describe('Test Quotes rendering', () => {
  it('should render quotes correctly', () => {
    const quote = renderer.create(<Router><Quotes /></Router>).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
