import { defineComponent, h } from 'vue';

export const ArrowLongDown = defineComponent({
  name: 'ArrowLongDown',
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
        h('path', {"d": "M16.53 17.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V2a.75.75 0 0 1 1.5 0v15.47z", "fillRule": "evenodd"})
      ]
    );
  }
});
