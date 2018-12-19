import VfNotify from '@/views/layouts/notify.vue';
import Helper from '../../helper';

describe('vf-notify.vue', () => {
  it('shoulds set default field when mount', () => {
    const wraper = Helper.getViewModel(VfNotify);

    expect(wraper.vm.visible).toBe(false);
    expect(wraper.vm.color).toBe('');
    expect(wraper.vm.text).toBe('');
  });
  it('shoulds set color and text when trigger open', () => {
    const wraper = Helper.getViewModel(VfNotify);

    wraper.vm.open({ color: 'red', text: 'lorem' });

    expect(wraper.vm.visible).toBe(true);
    expect(wraper.vm.color).toBe('red');
    expect(wraper.vm.text).toBe('lorem');
  });
});
