import Modal from '../client/components/Modal.jsx';
import { ModalBox } from '../client/components/ModalStyle.jsx';

describe('Modal Component', () => {
  test('should not close Modal when user clicks on Modal', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Modal handleHideModal={mockFunction} />);
    wrapper.find(ModalBox).simulate('click', {stopPropagation: jest.fn()});
    expect(mockFunction.mock.calls.length).toBe(0);
  })

  test('should return null when showModal is false', () => {
    const wrapper = shallow(<Modal showModal={false} />);
    expect(wrapper.find(Modal).exists()).toEqual(false);

  })
})