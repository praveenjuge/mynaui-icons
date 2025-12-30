import { defineComponent, h } from 'vue';

export const FlagOne = defineComponent({
  name: 'FlagOne',
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
        h('path', {"d": "M5.5 3A.75.75 0 0 0 4 3v18a.75.75 0 0 0 1.5 0v-6.438l13.241-3.883c1.679-.492 1.679-2.866 0-3.358L5.5 3.438z", "fillRule": "evenodd"})
      ]
    );
  }
});
