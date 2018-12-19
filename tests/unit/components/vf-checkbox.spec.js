import VfCheckbox from '@/components/vf-checkbox.vue';
import Helper from '../helper';

describe('vf-checkbox.vue', () => {
  it('renders a label text when mounted', () => {
    const wraper = Helper.getViewModel(VfCheckbox, {
      propsData: { field: { label: 'lorem', type: 'text' } },
    });

    expect(wraper.find('label').text()).toMatch('lorem');
  });
});
