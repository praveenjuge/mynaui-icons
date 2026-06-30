import { defineComponent, h } from 'vue';

export const AlarmClockMinus = defineComponent({
  name: 'AlarmClockMinus',
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
        h('path', {"d": "M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0m6.25-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5", "fillRule": "evenodd"})
      ]
    );
  }
});
