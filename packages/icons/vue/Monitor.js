import { defineComponent, h } from 'vue';

export const Monitor = defineComponent({
  name: 'Monitor',
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
        h('path', {"d": "M5 3.25A2.75 2.75 0 0 0 2.25 6v9A2.75 2.75 0 0 0 5 17.75h6.25v1.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.5H19A2.75 2.75 0 0 0 21.75 15V6A2.75 2.75 0 0 0 19 3.25z", "fillRule": "evenodd"})
      ]
    );
  }
});
