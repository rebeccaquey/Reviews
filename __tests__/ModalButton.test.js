import ModalButton from '../client/components/ModalButton.jsx';
import { testEnvironment } from '../jest.config.js';

describe('Modal Exit Button', () => {
  test('should trigger handleHideModal', () => {

    const mockFunction = jest.fn();

    const wrapper = mount(<ModalButton handleHideModal={mockFunction} />)

    wrapper.find('button').simulate('click');

    expect(mockFunction.mock.calls.length).toBe(1);
    wrapper.unmount();
  })

})