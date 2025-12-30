import { defineComponent, h } from 'vue';

export const BookmarkX = defineComponent({
  name: 'BookmarkX',
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
        h('path', {"d": "M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zm5.28 3.028a.75.75 0 1 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 10.56l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 9.5l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.44z", "fillRule": "evenodd"})
      ]
    );
  }
});
