import { defineComponent, h } from 'vue';

export const SignalCircle = defineComponent({
  name: 'SignalCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-1.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
