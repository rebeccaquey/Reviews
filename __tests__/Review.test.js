import Review from '../client/components/Review.jsx';
import sampleData from '../client/components/sampleData.js';

describe('Review Component', () => {
  test('should update state if handleExpanded is called', () => {
    const wrapper = shallow(<Review review={sampleData.reviews[0]} />);
    const mockFunction = jest.spyOn(wrapper.instance(), 'handleExpanded');
    wrapper.instance().handleExpanded();
    expect(wrapper.state('expanded')).toEqual(true);
    mockFunction.mockRestore()
  })
  
})