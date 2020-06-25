import MoreReviews from '../client/components/MoreReviews.jsx';

describe('MoreReviews Button', () => {
  test('should trigger handleShowModal', () => {

    const mockFunction = jest.fn();

    const wrapper = mount(<MoreReviews handleShowModal={mockFunction} />)

    wrapper.find('button').simulate('click');

    expect(mockFunction.mock.calls.length).toBe(1);
    wrapper.unmount();
  })

})