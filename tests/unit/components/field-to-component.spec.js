import FieldToComponent from '@/components/field-to-component.vue';
import Helper from '../helper';

describe('field-to-component.vue', () => {
  it('renders a vf-input-text when field type is text', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'text' } },
    });

    expect(wraper.vm.componentTag).toMatch('vf-input-text');
    expect(wraper.vm.$children[0].$options.name).toMatch('vf-input-text');
  });

  it('renders a vf-select when field type is select', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'select' } },
    });

    expect(wraper.vm.componentTag).toMatch('vf-select');
    expect(wraper.vm.$children[0].$options.name).toMatch('vf-select');
  });

  it('renders a vf-checkbox when field type is checkbox', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'checkbox' } },
    });

    expect(wraper.vm.componentTag).toMatch('vf-checkbox');
    expect(wraper.vm.$children[0].$options.name).toMatch('vf-checkbox');
  });

  it('renders a vf-radio when field type is radio', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'radio' } },
    });

    expect(wraper.vm.componentTag).toMatch('vf-radio');
    expect(wraper.vm.$children[0].$options.name).toMatch('vf-radio');
  });

  it('renders a empty when field type is unknown', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'lorem' } },
    });

    expect(wraper.vm.componentTag).toMatch('');
    expect(wraper.vm.$children[0]).toBeUndefined();
  });

  it('shoulds emit input when children emit a input event', () => {
    const wraper = Helper.getViewModel(FieldToComponent, {
      propsData: { field: { type: 'text' } },
    });

    wraper.vm.$children[0].$emit('input', 'lorem');

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toMatch('lorem');
  });
});
