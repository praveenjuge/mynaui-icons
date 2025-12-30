import { defineComponent, h } from 'vue';

export const BookmarkPlus = defineComponent({
  name: 'BookmarkPlus',
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
        h('path', {"d": "M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM12.75 7a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75V12a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
