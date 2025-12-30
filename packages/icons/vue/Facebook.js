import { defineComponent, h } from 'vue';

export const Facebook = defineComponent({
  name: 'Facebook',
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
        h('path', {"d": "M14.5 2.75c-2.861 0-5.25 2.389-5.25 5.25v1.75H6.5a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h2.75V21c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25v-6.75h2.75a.25.25 0 0 0 .242-.19l1-4a.25.25 0 0 0-.242-.31h-3.75V8a.76.76 0 0 1 .75-.75h3a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25z", "fillRule": "evenodd"})
      ]
    );
  }
});
