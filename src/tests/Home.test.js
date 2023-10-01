import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';

describe('Test Home rendering', () => {
  it('should render home correctly', () => {
    const home = renderer.create(<Router><Home /></Router>).toJSON();
    expect(home).toMatchSnapshot();
  });
});
