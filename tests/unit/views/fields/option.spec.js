import VfOption from '@/views/fields/option.vue';
import Helper from '../../helper';

describe('vf-option.vue', () => {
  it('shoulds mounted with right defaults', () => {
    const wraper = Helper.getViewModel(VfOption, {
      propsData: {
        value: {},
      },
    });

    expect(wraper.vm.option.value).toBe('');
    expect(wraper.vm.option.label).toBe('');
    expect(wraper.vm.canDestroy).toBe(false);
  });

  it('shoulds set value on option when mounting', () => {
    const wraper = Helper.getViewModel(VfOption, {
      propsData: {
        value: { value: '1', label: 'lorem' },
      },
    });

    expect(wraper.vm.option.value).toBe('1');
    expect(wraper.vm.option.label).toBe('lorem');
  });

  it('shoulds be valid when have label and input', () => {
    const wraper = Helper.getViewModel(VfOption, {
      propsData: {
        value: {},
      },
    });

    expect(wraper.vm.isValid).toBe(false);

    wraper.vm.option.label = 'lorem';

    expect(wraper.vm.isValid).toBe(false);

    wraper.vm.option.value = '1';

    expect(wraper.vm.isValid).toBe(true);
  });

  it('shoulds emit input with current option when trigger handleOption', () => {
    const wraper = Helper.getViewModel(VfOption, {
      propsData: { value: {} },
    });

    wraper.vm.handleOption();
    expect(wraper.emitted().input).toBe(undefined);

    const option = { value: '1', label: 'lorem' };
    wraper.vm.option = option;

    wraper.vm.handleOption();

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual(option);
  });

  it('shoulds update option when change prop value', () => {
    const wraper = Helper.getViewModel(VfOption, {
      propsData: { value: {} },
    });

    expect(wraper.vm.option.label).toBe('');
    expect(wraper.vm.option.value).toBe('');

    wraper.setProps({ value: { value: '1', label: 'lorem' } });

    expect(wraper.vm.option.value).toBe('1');
    expect(wraper.vm.option.label).toBe('lorem');
  });
});
