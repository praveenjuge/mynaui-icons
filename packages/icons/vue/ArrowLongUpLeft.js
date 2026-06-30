import { defineComponent, h } from 'vue';

export const ArrowLongUpLeft = defineComponent({
  name: 'ArrowLongUpLeft',
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
        h('path', {"d": "M19.53 19.53a.75.75 0 0 0 0-1.06L8.905 7.845 11.75 5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75l2.845-2.845L18.47 19.53a.75.75 0 0 0 1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
