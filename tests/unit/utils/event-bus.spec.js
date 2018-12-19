import Vue from 'vue';
import EventBus from '@/utils/event-bus';

describe('event-bus.js', () => {
  it('shoulds be a vue instance', () => {
    expect(EventBus).toBeInstanceOf(Vue);
  });
  it('shoulds export a $emit function', () => {
    expect('$emit' in EventBus).toBe(true);
  });
  it('shoulds export a $on function', () => {
    expect('$on' in EventBus).toBe(true);
  });
});
