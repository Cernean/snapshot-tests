import { render, screen } from '@testing-library/react';
import App from './App';
//import renderer from 'react-test-renderer'


// test('renders a snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON()
//   console.log(tree)
//   expect(tree).toMatchSnapshot()
// })
test('renders text ConstantinCernean', () => {
  render(<App />)
  const nameElement = screen.getByText(/constantin cernean/i)
  expect(nameElement).toBeInTheDocument()
});