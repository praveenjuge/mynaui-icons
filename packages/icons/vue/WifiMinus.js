import { defineComponent, h } from 'vue';

export const WifiMinus = defineComponent({
  name: 'WifiMinus',
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
        h('path', {"d": "M12 6.25c-3.415 0-6.827 1.26-9.484 3.777a.75.75 0 0 1-1.032-1.089A15.25 15.25 0 0 1 12 4.75a.75.75 0 0 1 0 1.5M14.75 6a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M4.47 13.43a.75.75 0 0 1 0-1.06c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06 9.15 9.15 0 0 0-12.94 0 .75.75 0 0 1-1.06 0m3 3.257a.75.75 0 0 1 0-1.06 6.407 6.407 0 0 1 9.06 0 .75.75 0 0 1-1.06 1.06 4.907 4.907 0 0 0-6.94 0 .75.75 0 0 1-1.06 0M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18", "fillRule": "evenodd"})
      ]
    );
  }
});
