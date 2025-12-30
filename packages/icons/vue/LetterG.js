import { defineComponent, h } from 'vue';

export const LetterG = defineComponent({
  name: 'LetterG',
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
        h('path', {"d": "M10.875 6A2.875 2.875 0 0 0 8 8.875v6.25A2.875 2.875 0 0 0 10.875 18h3.75c.898 0 1.625-.727 1.625-1.625v-3.75c0-.898-.727-1.625-1.625-1.625h-1.458a1 1 0 1 0 0 2h1.083v3h-3.375a.875.875 0 0 1-.875-.875v-6.25c0-.483.392-.875.875-.875h2.5c.483 0 .875.392.875.875a1 1 0 1 0 2 0A2.875 2.875 0 0 0 13.375 6z", "fillRule": "evenodd"})
      ]
    );
  }
});
