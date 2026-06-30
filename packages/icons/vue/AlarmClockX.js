import { defineComponent, h } from 'vue';

export const AlarmClockX = defineComponent({
  name: 'AlarmClockX',
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
        h('path', {"d": "M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0m6.22-2.53a.75.75 0 0 1 1.06 0L12 11.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 13l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 14.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 13l-1.47-1.47a.75.75 0 0 1 0-1.06", "fillRule": "evenodd"})
      ]
    );
  }
});
