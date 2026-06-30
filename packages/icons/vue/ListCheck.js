import { defineComponent, h } from 'vue';

export const ListCheck = defineComponent({
  name: 'ListCheck',
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
        h('path', {"d": "M8.082 4.973a.75.75 0 0 0-1.164-.946L4.541 6.953l-1.118-.764a.75.75 0 1 0-.846 1.238L4.264 8.58a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.946l-2.377 2.926-1.118-.764a.75.75 0 0 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.945L4.541 18.49l-1.118-.764a.75.75 0 1 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zM11 5.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
