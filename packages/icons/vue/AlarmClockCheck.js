import { defineComponent, h } from 'vue';

export const AlarmClockCheck = defineComponent({
  name: 'AlarmClockCheck',
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
        h('path', {"d": "M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0m11.834-2.608a.75.75 0 0 1 .169 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.639.077l-1.378-1.576a.75.75 0 1 1 1.128-.987l1.005 1.148 2.468-3.416a.75.75 0 0 1 1.047-.169", "fillRule": "evenodd"})
      ]
    );
  }
});
