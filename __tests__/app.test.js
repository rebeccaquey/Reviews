import App from '../client/components/App.jsx'
import OverallStars from '../client/components/OverallStars.jsx';
import Modal from '../client/components/Modal.jsx';

describe('App Component', () => {
  test('Modal component exists', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Modal).exists()).toEqual(true);
  });
});

