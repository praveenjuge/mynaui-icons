import { defineComponent, h } from 'vue';

export const ArrowUpDown = defineComponent({
  name: 'ArrowUpDown',
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
        h('path', {"d": "M7.5 18.25a.75.75 0 0 0 .75-.75v-6.97h3.28a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 0 1.06h3.28v6.97c0 .414.336.75.75.75m9-12.5a.75.75 0 0 1 .75.75v6.97h3.28a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06h3.28V6.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
