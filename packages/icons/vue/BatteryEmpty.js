import { defineComponent, h } from 'vue';

export const BatteryEmpty = defineComponent({
  name: 'BatteryEmpty',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '12px', height: '12px',
        class: `mynaui-solid ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M21 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-17-4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25z", "fillRule": "evenodd"})
      ]
    );
  }
});
