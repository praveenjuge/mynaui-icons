import { defineComponent, h } from 'vue';

export const LetterD = defineComponent({
  name: 'LetterD',
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
        h('path', {"d": "M8.625 6C7.728 6 7 6.728 7 7.625v8.75C7 17.273 7.728 18 8.625 18h2.5a5.375 5.375 0 0 0 5.375-5.375v-1.25A5.375 5.375 0 0 0 11.125 6zM9 16V8h2.125a3.375 3.375 0 0 1 3.375 3.375v1.25A3.375 3.375 0 0 1 11.125 16z", "fillRule": "evenodd"})
      ]
    );
  }
});
