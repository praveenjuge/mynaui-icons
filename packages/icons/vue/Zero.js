import { defineComponent, h } from 'vue';

export const Zero = defineComponent({
  name: 'Zero',
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
        h('path', {"d": "M11.875 7.75A2.375 2.375 0 0 0 9.5 10.125v3.75a2.375 2.375 0 1 0 4.75 0v-3.75a2.375 2.375 0 0 0-2.375-2.375M8 10.125a3.875 3.875 0 0 1 7.75 0v3.75a3.875 3.875 0 0 1-7.75 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
