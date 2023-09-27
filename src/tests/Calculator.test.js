import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../pages/Calculator';

describe('Test Calculator rendering', () => {
  it('should render calculator correctly', () => {
    const calculator = renderer.create(<Router><Calculator /></Router>).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
