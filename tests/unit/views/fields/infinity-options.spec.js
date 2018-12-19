import InfinityOptions from '@/views/fields/infinity-options.vue';
import Helper from '../../helper';

describe('infinity-options.vue', () => {
  it('shoulds mounted with right defaults', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [],
      },
    });

    expect(wraper.vm.options.length).toBe(1);
    expect(wraper.vm.options[0].label).toBe('');
    expect(wraper.vm.options[0].value).toBe('');
  });

  it('shoulds prepend values on options when mounting', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [{ value: '1', label: 'lorem' }],
      },
    });

    expect(wraper.vm.options.length).toBe(2);
    expect(wraper.vm.options[0].value).toBe('1');
    expect(wraper.vm.options[0].label).toBe('lorem');
  });

  it('shoulds permit destroy when options is bigger then 1', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [],
      },
    });

    expect(wraper.vm.canDestroy).toBe(false);

    wraper.vm.options.push({ value: '', label: '' });

    expect(wraper.vm.canDestroy).toBe(true);
  });

  it('shoulds filter empty options when option don\'t have label and value', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [],
      },
    });

    wraper.vm.options.push({ value: '', label: '' });
    wraper.vm.options.push({ value: '1', label: 'lorem' });
    wraper.vm.options.push({ value: '2', label: '' });
    expect(wraper.vm.filterdOptions.length).toBe(1);
    expect(wraper.vm.filterdOptions[0].value).toBe('1');
    expect(wraper.vm.filterdOptions[0].label).toBe('lorem');
  });

  it('shoulds emit input with filterd when trigger handleOption', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [],
      },
    });

    const option = { value: '1', label: 'lorem' };

    wraper.vm.options.push(option);

    wraper.vm.handleOption();

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual([option]);
  });

  it('shoulds emit input with filterd when trigger handleOption', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [{ value: '1', label: 'lorem' }],
      },
    });

    wraper.vm.handleDestroy(0);

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual([]);
  });

  it('shoulds append new empty option when change prop value', () => {
    const wraper = Helper.getViewModel(InfinityOptions, {
      propsData: {
        value: [],
      },
    });

    expect(wraper.vm.options.length).toBe(1);
    expect(wraper.vm.options[0].value).toBe('');
    expect(wraper.vm.options[0].label).toBe('');

    wraper.setProps({ value: [{ value: '1', label: 'lorem' }] });

    expect(wraper.vm.options.length).toBe(2);
    expect(wraper.vm.options[0].value).toBe('1');
    expect(wraper.vm.options[0].label).toBe('lorem');
    expect(wraper.vm.options[1].value).toBe('');
    expect(wraper.vm.options[1].label).toBe('');
  });
});
