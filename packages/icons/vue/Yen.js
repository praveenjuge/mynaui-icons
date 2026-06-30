import { defineComponent, h } from 'vue';

export const Yen = defineComponent({
  name: 'Yen',
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
        h('path', {"d": "M5.568 2.887a.75.75 0 0 1 1.045.18L12 10.7l5.387-7.632a.75.75 0 0 1 1.226.865l-5.165 7.318h4.007a.75.75 0 0 1 0 1.5H12.75v2.75h4.705a.75.75 0 0 1 0 1.5H12.75v3.5a.75.75 0 1 1-1.5 0V17H6.546a.75.75 0 1 1 0-1.5h4.704v-2.75H6.546a.75.75 0 1 1 0-1.5h4.007L5.387 3.932a.75.75 0 0 1 .18-1.045", "fillRule": "evenodd"})
      ]
    );
  }
});
