import { defineComponent, h } from 'vue';

export const Mobile = defineComponent({
  name: 'Mobile',
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
        h('path', {"d": "M5.25 4.8c0-1.373 1.07-2.55 2.464-2.55h8.572c1.395 0 2.464 1.177 2.464 2.55v14.4c0 1.373-1.07 2.55-2.464 2.55H7.714c-1.395 0-2.464-1.177-2.464-2.55zm5.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
