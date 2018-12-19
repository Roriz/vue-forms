import FormCreate from '@/views/forms/create.vue';
import Helper from '../../helper';
import EventBus from '@/utils/event-bus';

describe('form-create.vue', () => {
  it('shoulds set default field when mount', () => {
    const wraper = Helper.getViewModel(FormCreate, {
      mocks: { $route: { params: {} } },
    });

    expect(wraper.vm.previewing).toBe(false);
    expect(wraper.vm.loading).toBe(false);
    expect(wraper.vm.isValid).toBe(true);
    expect(wraper.vm.form.name).toBe('');
    expect(wraper.vm.form.fields.length).toBe(0);
    expect(wraper.vm.isEdit).toBe(false);
  });

  it('shoulds trigger save when trigger handleSubmit and is valid', () => {
    const saveStub = jest.fn();
    const validateStub = jest.fn();
    const VFormStub = {
      render: () => {},
      methods: { validate: validateStub },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      methods: { save: saveStub },
      stubs: { 'v-form': VFormStub },
      mocks: { $route: { params: {} } },
    });

    expect(saveStub).not.toHaveBeenCalled();
    expect(validateStub).not.toHaveBeenCalled();

    wraper.vm.isValid = false;
    wraper.vm.handleSubmit();

    expect(validateStub).toHaveBeenCalled();
    expect(saveStub).not.toHaveBeenCalled();

    wraper.vm.isValid = true;
    wraper.vm.handleSubmit();

    expect(validateStub).toHaveBeenCalled();
    expect(saveStub).toHaveBeenCalled();
  });

  it('shoulds trigger getForm when mounting', () => {
    const getFormStub = jest.fn();

    Helper.getViewModel(FormCreate, {
      methods: { getForm: getFormStub },
      mocks: { $route: { params: {} } },
    });

    expect(getFormStub).toHaveBeenCalled();
  });

  it('shoulds dispatch create when trigger save', async (done) => {
    const formCreateStub = jest.fn(() => Promise.resolve());
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            create: formCreateStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    wraper.vm.save();

    expect(wraper.vm.loading).toBe(true);
    expect(formCreateStub).toHaveBeenCalled();

    await Promise.resolve();

    expect(wraper.vm.loading).toBe(false);
    done();
  });

  it('shoulds emit notify and reload page when successful save', async (done) => {
    const formCreateStub = jest.fn(() => Promise.resolve());
    const notifyStub = jest.fn();
    const reloadStub = jest.fn();
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            create: formCreateStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    EventBus.$on('vf-notify', notifyStub);
    EventBus.$on('reloadPage', reloadStub);

    wraper.vm.save();

    await Promise.resolve();

    wraper.vm.$nextTick(() => {
      expect(notifyStub).toHaveBeenCalled();
      expect(notifyStub).toHaveBeenCalledWith({ color: 'success', text: 'Form created!' });
      expect(reloadStub).toHaveBeenCalled();
      done();
    });
  });

  it('shoulds emit error notify when fail on save', async (done) => {
    const formCreateStub = jest.fn(() => Promise.reject(new Error('lorem-error')));
    const notifyStub = jest.fn();
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            create: formCreateStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    EventBus.$on('vf-notify', notifyStub);

    wraper.vm.save();

    await Promise.resolve();

    wraper.vm.$nextTick(() => {
      expect(global.console.error).toHaveBeenCalled();
      expect(notifyStub).toHaveBeenCalled();
      expect(notifyStub).toHaveBeenCalledWith({ color: 'error', text: 'lorem-error' });
      done();
    });
  });

  it('shoulds be edit mode when have id on route params ', async () => {
    const wraper = Helper.getViewModel(FormCreate, {
      mocks: { $route: { params: { id: 1 } } },
    });

    expect(wraper.vm.isEdit).toBe(true);
  });

  it('shoulds dispatch edit when trigger save on edit mode', async (done) => {
    const formEditStub = jest.fn(() => Promise.resolve());
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            edit: formEditStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: { id: 1 } } },
    });

    wraper.vm.save();

    expect(wraper.vm.loading).toBe(true);
    expect(formEditStub).toHaveBeenCalled();

    await Promise.resolve();

    expect(wraper.vm.loading).toBe(false);
    done();
  });

  it('shoulds dispatch fetchOne when trigger getForm', async (done) => {
    const formFetchOneStub = jest.fn(() => Promise.resolve({}));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            fetchOne: formFetchOneStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    wraper.vm.getForm(1);

    expect(wraper.vm.loading).toBe(true);
    expect(formFetchOneStub).toHaveBeenCalled();

    await Promise.resolve();

    expect(wraper.vm.loading).toBe(false);
    done();
  });

  it('shoulds not dispatch fetchOne when trigger getForm without id', () => {
    const formFetchOneStub = jest.fn(() => Promise.resolve({}));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            fetchOne: formFetchOneStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    wraper.vm.getForm();

    expect(wraper.vm.loading).toBe(false);
    expect(formFetchOneStub).not.toHaveBeenCalled();
  });

  it('shoulds emit error when fail on getForm', async (done) => {
    const error = new Error('lorem-error');
    const formFetchOneStub = jest.fn(() => Promise.reject(error));
    const store = {
      modules: {
        forms: {
          namespaced: true,
          actions: {
            fetchOne: formFetchOneStub,
          },
        },
      },
    };

    const wraper = Helper.getViewModel(FormCreate, {
      store,
      mocks: { $route: { params: {} } },
    });

    wraper.vm.getForm(1);

    await Promise.resolve();

    expect(global.console.error).toHaveBeenCalled();
    expect(global.console.error).toHaveBeenCalledWith(error);

    done();
  });
});
