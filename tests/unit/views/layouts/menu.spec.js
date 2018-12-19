import VfMenu from '@/views/layouts/menu.vue';
import Helper from '../../helper';
import { wrap } from 'module';

describe('vf-menu.vue', () => {
  it('shoulds commit SET_MENU to false when trigger handleMenu with false argument', () => {
    const SetMenuStub = jest.fn();
    const store = {
      state: {
        visibleMenu: true,
      },
      mutations: {
        SET_MENU: SetMenuStub,
      },
    };

    const wraper = Helper.getViewModel(VfMenu, {
      store,
    });

    wraper.vm.handleMenu(false);

    expect(SetMenuStub).toHaveBeenCalled();
    expect(SetMenuStub).toHaveBeenCalledWith(expect.anything(), false);
  });

  it('shoulds commit SET_MENU to true when trigger handleMenu with true argument', () => {
    const SetMenuStub = jest.fn();
    const store = {
      state: {
        visibleMenu: true,
      },
      mutations: {
        SET_MENU: SetMenuStub,
      },
    };

    const wraper = Helper.getViewModel(VfMenu, {
      store,
    });

    wraper.vm.handleMenu(true);

    expect(SetMenuStub).toHaveBeenCalled();
    expect(SetMenuStub).toHaveBeenCalledWith(expect.anything(), true);
  });

  it('shoulds be visible menu when store state is true', () => {
    const store = {
      state: { visibleMenu: true },
    };

    const wraper = Helper.getViewModel(VfMenu, {
      store,
    });

    expect(wraper.vm.menuVisible).toBe(true);
  });

  it('shoulds be not visible menu when store state is false', () => {
    const store = {
      state: { visibleMenu: false },
    };

    const wraper = Helper.getViewModel(VfMenu, {
      store,
    });

    expect(wraper.vm.menuVisible).toBe(false);
  });
});
