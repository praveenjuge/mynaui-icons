import { defineComponent, h } from 'vue';

export const Clock7 = defineComponent({
  name: 'Clock7',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v5.785l-2.386 3.817a.75.75 0 1 0 1.272.796l2.5-4A.75.75 0 0 0 12.75 12z", "fillRule": "evenodd"})
      ]
    );
  }
});
