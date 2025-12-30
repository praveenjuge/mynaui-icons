import { defineComponent, h } from 'vue';

export const HashCircle = defineComponent({
  name: 'HashCircle',
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
        h('path', {"d": "M10.769 13h1.976l.359-2h-1.976z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-.963 5.012a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605", "fillRule": "evenodd"})
      ]
    );
  }
});
