import { defineComponent, h } from 'vue';

export const ArrowLongDownLeft = defineComponent({
  name: 'ArrowLongDownLeft',
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
        h('path', {"d": "M19.53 4.47a.75.75 0 0 1 0 1.06L8.905 16.155 11.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75l2.845 2.845L18.47 4.47a.75.75 0 0 1 1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
