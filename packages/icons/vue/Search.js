import { defineComponent, h } from 'vue';

export const Search = defineComponent({
  name: 'Search',
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
        h('path', {"d": "M11.5 3.25a8.25 8.25 0 1 0 5.265 14.602l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 0 0 11.5 3.25", "fillRule": "evenodd"})
      ]
    );
  }
});
