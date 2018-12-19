import VfHeader from '@/views/layouts/header.vue';
import Helper from '../../helper';

describe('vf-header.vue', () => {
  it('shoulds commit SET_MENU when trigger toggleMenu', () => {
    const SetMenuStub = jest.fn();
    const visibleMenu = true;
    const store = {
      state: {
        visibleMenu,
      },
      mutations: {
        SET_MENU: SetMenuStub,
      },
    };

    const wraper = Helper.getViewModel(VfHeader, {
      store,
    });

    wraper.vm.toggleMenu();

    expect(SetMenuStub).toHaveBeenCalled();
    expect(SetMenuStub).toHaveBeenCalledWith(expect.anything(),  !visibleMenu);
  });
});
