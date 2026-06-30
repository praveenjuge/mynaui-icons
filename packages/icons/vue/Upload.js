import { defineComponent, h } from 'vue';

export const Upload = defineComponent({
  name: 'Upload',
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
        h('path', {"d": "M11.47 3.97a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06h-3.28v6.97a.75.75 0 0 1-1.5 0V8.53H7.97a.75.75 0 0 1 0-1.06zM20 15.25a.75.75 0 0 1 .75.75v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-.996a.75.75 0 1 1 1.5 0V17A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
