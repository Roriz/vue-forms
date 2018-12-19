import InfinityFields from '@/views/fields/infinity-fields.vue';
import Helper from '../helper';

describe('infinity-fields.vue', () => {
  it('shoulds mounted with right defaults', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [],
      },
    });

    expect(wraper.vm.creating).toBe(false);
    expect(wraper.vm.selectedKey).toBe(null);
  });

  it('shoulds emit input without key when trigger handleDestroy', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [{ type: 'text' }, { type: 'select' }],
      },
    });

    wraper.vm.handleDestroy(0);

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual([{ type: 'select' }]);
  });

  it('shoulds set selectedKey and creating when trigger handleEdit', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [{ type: 'text' }],
      },
    });

    wraper.vm.handleEdit(0);

    expect(wraper.vm.creating).toBe(true);
    expect(wraper.vm.selectedKey).toBe(0);
  });

  it('shoulds emit input with new field when trigger handleField without selectedKey', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [{ type: 'text' }],
      },
    });

    wraper.vm.handleField({ type: 'select' });

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual([{ type: 'text' }, { type: 'select' }]);
    expect(wraper.vm.creating).toBe(false);
    expect(wraper.vm.selectedKey).toBe(null);
  });

  it('shoulds emit input with edited field when trigger handleField with selectedKey', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [{ type: 'text' }, { type: 'radio' }],
      },
    });

    wraper.vm.selectedKey = 0;
    wraper.vm.handleField({ type: 'select' });

    expect(wraper.emitted().input.length > 0).toBe(true);
    expect(wraper.emitted().input[0][0]).toEqual([{ type: 'select' }, { type: 'radio' }]);
    expect(wraper.vm.creating).toBe(false);
    expect(wraper.vm.selectedKey).toBe(null);
  });

  it('shoulds hasSelected when selectedKey is valid', () => {
    const wraper = Helper.getViewModel(InfinityFields, {
      propsData: {
        value: [],
      },
    });

    expect(wraper.vm.hasSelected).toBe(false);

    wraper.vm.selectedKey = 0;

    expect(wraper.vm.hasSelected).toBe(true);
  });
});
