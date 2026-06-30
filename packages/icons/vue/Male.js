import { defineComponent, h } from 'vue';

export const Male = defineComponent({
  name: 'Male',
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
        h('path', {"d": "M16 3.25a.75.75 0 0 0 0 1.5h2.185l-3.982 3.968a6.75 6.75 0 1 0 1.063 1.059l3.984-3.97V8a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
