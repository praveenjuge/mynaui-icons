import { defineComponent, h } from 'vue';

export const ArrowDownLeft = defineComponent({
  name: 'ArrowDownLeft',
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
        h('path', {"d": "M15.5 18.25a.75.75 0 0 0 .75-.75l-4.345-4.345L18.03 7.03a.75.75 0 0 0-1.06-1.06l-6.125 6.125L6.5 7.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
