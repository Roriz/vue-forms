import DialogShow from '@/views/forms/dialog-show.vue';
import Helper from '../../helper';

describe('forms-dialog-show.vue', () => {
  it('shoulds set default field when mount', () => {
    const wraper = Helper.getViewModel(DialogShow, {
      propsData: { form: {} },
    });

    expect(wraper.vm.submitted).toBe(false);
    expect(wraper.vm.simulateMobile).toBe(true);
    expect(wraper.vm.isValid).toBe(true);
    expect(wraper.vm.formValues).toEqual({});
  });

  it('shoulds trigger save when trigger handleSubmit and is valid', () => {
    const validateStub = jest.fn();
    const VFormStub = {
      render: () => {},
      methods: { validate: validateStub },
    };

    const wraper = Helper.getViewModel(DialogShow, {
      stubs: { 'v-form': VFormStub },
      propsData: { form: {} },
    });

    expect(validateStub).not.toHaveBeenCalled();

    wraper.vm.isValid = false;
    wraper.vm.handleSubmit();

    expect(wraper.vm.submitted).toBe(false);
    expect(validateStub).toHaveBeenCalled();

    wraper.vm.isValid = true;
    wraper.vm.handleSubmit();

    expect(validateStub).toHaveBeenCalled();
    expect(wraper.vm.submitted).toBe(true);
  });

  it('shoulds set form values when trigger handleFieldInput', () => {
    const wraper = Helper.getViewModel(DialogShow, {
      propsData: { form: {} },
    });

    expect(wraper.vm.formValues).toEqual({});

    wraper.vm.handleFieldInput(0, 'lorem');

    expect(wraper.vm.formValues).toEqual({ 0: 'lorem' });
  });

  it('shoulds response fields with value when form data has value', (done) => {
    const wraper = Helper.getViewModel(DialogShow, {
      propsData: { form: { fields: [{ type: 'text' }] } },
    });

    expect(wraper.vm.formWithValue).toEqual([{ type: 'text' }]);

    wraper.vm.formValues = { 0: 'lorem' };

    wraper.vm.$nextTick(() => {
      expect(wraper.vm.formWithValue[0].type).toEqual('text');
      expect(wraper.vm.formWithValue[0].value).toEqual('lorem');
      done();
    });
  });
});
