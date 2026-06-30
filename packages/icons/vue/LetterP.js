import { defineComponent, h } from 'vue';

export const LetterP = defineComponent({
  name: 'LetterP',
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
        h('path', {"d": "M9.625 6C8.728 6 8 6.728 8 7.625V17a1 1 0 1 0 2 0v-4h3.375a2.875 2.875 0 0 0 2.875-2.875v-1.25A2.875 2.875 0 0 0 13.375 6zM10 11V8h3.375c.483 0 .875.392.875.875v1.25a.875.875 0 0 1-.875.875z", "fillRule": "evenodd"})
      ]
    );
  }
});
