import FormsList from '@/views/forms/list.vue';
import Helper from '../../helper';

describe('forms-list.vue', () => {
  it('shoulds set default field when mount', () => {
    const wraper = Helper.getViewModel(FormsList);

    expect(wraper.vm.previewing).toBe(false);
    expect(wraper.vm.loading).toBe(false);
    expect(wraper.vm.forms).toEqual([]);
    expect(wraper.vm.selected).toEqual({});
  });

  it('shoulds trigger getForms when mounting', () => {
    const getFormsStub = jest.fn();

    Helper.getViewModel(FormsList, {
      methods: { getForms: getFormsStub },
    });

    expect(getFormsStub).toHaveBeenCalled();
  });

  it('shoulds set selected when trigger handlePreview', () => {
    const wraper = Helper.getViewModel(FormsList);

    expect(wraper.vm.selected).toEqual({});
    expect(wraper.vm.previewing).toEqual(false);

    const form = {
      name: 'lorem',
    };
    wraper.vm.handlePreview(form)

    expect(wraper.vm.selected).toEqual(form);
    expect(wraper.vm.previewing).toEqual(true);
  });

  it('shoulds dispatch fetchBy when trigger getForms', async (done) => {
    const formFetchByStub = jest.fn(() => Promise.resolve([]));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            fetchBy: formFetchByStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormsList, {
      store,
    });

    wraper.vm.getForms();

    expect(wraper.vm.loading).toBe(true);
    expect(formFetchByStub).toHaveBeenCalled();

    await Promise.resolve();

    expect(wraper.vm.loading).toBe(false);
    done();
  });

  it('shoulds emit error when fail on getForms', async (done) => {
    const error = new Error('lorem-error');
    const formFetchByStub = jest.fn(() => Promise.reject(error));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            fetchBy: formFetchByStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormsList, {
      store,
    });

    wraper.vm.getForms();

    await Promise.resolve();

    expect(global.console.error).toHaveBeenCalled();
    expect(global.console.error).toHaveBeenCalledWith(error);
    done();
  });

  it('shoulds dispatch destroy when trigger handleDestroy', async (done) => {
    const formDestroyStub = jest.fn(() => Promise.resolve([]));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            destroy: formDestroyStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormsList, {
      store,
    });

    wraper.vm.handleDestroy(1);

    expect(wraper.vm.loading).toBe(true);
    expect(formDestroyStub).toHaveBeenCalled();

    await Promise.resolve();

    expect(wraper.vm.loading).toBe(false);
    done();
  });

  it('shoulds not dispatch destroy when trigger handleDestroy without id', () => {
    const getFormsStub = jest.fn();

    const formDestroyStub = jest.fn(() => Promise.resolve([]));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            destroy: formDestroyStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormsList, {
      store,
      methods: { getForms: getFormsStub },
    });

    wraper.vm.handleDestroy();

    expect(wraper.vm.loading).toBe(false);
    expect(formDestroyStub).not.toHaveBeenCalled();
  });

  it('shoulds emit error when fail on handleDestroy', async (done) => {
    const error = new Error('lorem-error');
    const formDestroyStub = jest.fn(() => Promise.reject(error));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            destroy: formDestroyStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormsList, {
      store,
    });

    wraper.vm.handleDestroy(1);

    await Promise.resolve();

    expect(global.console.error).toHaveBeenCalled();
    expect(global.console.error).toHaveBeenCalledWith(error);
    done();
  });
});
