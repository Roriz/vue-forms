import DialogCreate from '@/views/fields/dialog-create.vue';
import Helper from '../helper';

describe('fields-dialog-create.vue', () => {
  it('shoulds set default field when mount', () => {
    const wraper = Helper.getViewModel(DialogCreate);

    expect(wraper.vm.field.type).toBe('');
    expect(wraper.vm.field.label).toBe('');
    expect(wraper.vm.field.options.length).toBe(0);
    expect(wraper.vm.field.required).toBe(false);
  });

  it('shoulds merge value when mount', () => {
    const value = {
      type: 'text',
      label: 'lorem',
      options: [{ label: 'lorem', value: 'lorem' }],
    };
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value,
      },
    });

    expect(wraper.vm.field.type).toBe('text');
    expect(wraper.vm.field.label).toBe('lorem');
    expect(wraper.vm.field.options.length).toBe(1);
    expect(wraper.vm.field.options[0].label).toBe('lorem');
    expect(wraper.vm.field.options[0].value).toBe('lorem');
    expect(wraper.vm.field.required).toBe(false);
  });

  it('shoulds emit input event when run handleSubmit', () => {
    const value = {
      type: '',
      label: '',
      options: [],
      required: false,
    };
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value,
      },
    });

    wraper.vm.handleSubmit();

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual(value);
  });

  it('shoulds emit close event when run close method', () => {
    const wraper = Helper.getViewModel(DialogCreate);

    wraper.vm.close();

    expect(wraper.emitted().close.length > 0).toBe(true);
  });

  it('shoulds response a collection of a name of all field types when mounting', () => {
    const wraper = Helper.getViewModel(DialogCreate);

    expect(wraper.vm.fieldTypes).toEqual(['text', 'select', 'checkbox', 'radio']);
  });

  it('shoulds needOptions when field is select', () => {
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value: { type: 'select' },
      },
    });

    expect(wraper.vm.needOptions).toBe(true);
  });

  it('shoulds needOptions when field is checkbox', () => {
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value: { type: 'checkbox' },
      },
    });

    expect(wraper.vm.needOptions).toBe(true);
  });

  it('shoulds needOptions when field is radio', () => {
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value: { type: 'radio' },
      },
    });

    expect(wraper.vm.needOptions).toBe(true);
  });

  it('shoulds not needOptions when field is text', () => {
    const wraper = Helper.getViewModel(DialogCreate, {
      propsData: {
        value: { type: 'text' },
      },
    });

    expect(wraper.vm.needOptions).toBe(false);
  });
});
