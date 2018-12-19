import VfSelect from '@/components/vf-select.vue';
import Helper from '../helper';

describe('vf-select.vue', () => {
  it('shoulds emit input event when run handleInput', () => {
    const wraper = Helper.getViewModel(VfSelect, {
      propsData: { field: {} },
    });

    wraper.vm.handleInput('lorem');

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toMatch('lorem');
  });

  it('computed a empty rules when mounted', () => {
    const wraper = Helper.getViewModel(VfSelect, {
      propsData: { field: {} },
    });

    expect(wraper.vm.rules.length).toBe(0);
  });

  it('computed a required rules when filed has required', () => {
    const wraper = Helper.getViewModel(VfSelect, {
      propsData: { field: { required: true } },
    });

    expect(wraper.vm.rules.length).toBe(1);
  });
});
