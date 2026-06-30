import { defineComponent, h } from 'vue';

export const LetterY = defineComponent({
  name: 'LetterY',
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
        h('path', {"d": "M8.8 6.4a1 1 0 1 0-1.6 1.2l3.55 4.733V17a1 1 0 1 0 2 0v-4.667L16.3 7.6a1 1 0 0 0-1.6-1.2l-2.95 3.933z", "fillRule": "evenodd"})
      ]
    );
  }
});
