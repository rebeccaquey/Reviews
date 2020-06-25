import App from '../client/components/App.jsx';
// import Root from '../client/index.jsx';
// import OverallStars from '../client/components/OverallStars.jsx';
import Modal from '../client/components/Modal.jsx';
import data from '../client/components/sampleData.js';
// const data = require('../server/sampleData.js');

describe('App Component', () => {
  test('App component exists', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    // console.log('wrapper', wrapper.find(App).children() )
    expect(wrapper.find(App).exists()).toEqual(true);
    // expect(wrapper.find(App).children() > 4).toEqual(true);
    expect(instance).toBeInstanceOf(App);
    wrapper.unmount();
  });

  // xtest('renders correctly', () => {
  //   const wrapper = mount(<App />)
  //   expect(wrapper).toMatchSnapshot();
  //   wrapper.unmount();
  // })
  
  test('Modal should render if showModal state is true', () => {
    const wrapper = mount(<App />);
    wrapper.setState({showModal: true, loaded: true});
    expect(wrapper.find(Modal).exists()).toBe(true);
    wrapper.unmount();
  })
});


// console.log(data.sampleData)