import { defineComponent, h } from 'vue';

export const AlarmClockSnooze = defineComponent({
  name: 'AlarmClockSnooze',
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
        h('path', {"d": "M6.584 3.612a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zm11.7-1.224a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zM3.25 13a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0m7.5-2.75a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z", "fillRule": "evenodd"})
      ]
    );
  }
});
