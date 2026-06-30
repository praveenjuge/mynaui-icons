import { defineComponent, h } from 'vue';

export const Pen = defineComponent({
  name: 'Pen',
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
        h('path', {"d": "M2.32 4.547c-.388-1.359.868-2.614 2.227-2.226l9.157 2.616c2.996.856 5.144 3.271 5.144 6.485 0 .49-.058.97-.164 1.437-.042.185.012.326.083.397l2.456 2.456a1.8 1.8 0 0 1 0 2.546l-2.965 2.965a1.8 1.8 0 0 1-2.546 0l-2.46-2.46c-.07-.071-.212-.125-.397-.082a6.4 6.4 0 0 1-1.433.167c-3.214 0-5.63-2.148-6.485-5.144zM7.1 7.099a.75.75 0 0 0 0 1.061l3.005 3.006a.75.75 0 0 0 1.061-1.06L8.16 7.098a.75.75 0 0 0-1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
