import { defineComponent, h } from 'vue';

export const Heading4 = defineComponent({
  name: 'Heading4',
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
        h('path', {"d": "M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m16.066 5.913a.75.75 0 0 0-1.465-.326c-.173.78-.423 1.534-.71 2.238l-2.477 4.332a.75.75 0 0 0 .586 1.218h3V19.5a.75.75 0 0 0 1.5 0v-2.375h.5a.75.75 0 0 0 0-1.5h-.5V14.5a.75.75 0 0 0-1.5 0v1.125h-1.554c.172-.265.36-.568.556-.903.75-1.287 1.624-3.08 2.064-5.06", "fillRule": "evenodd"})
      ]
    );
  }
});
