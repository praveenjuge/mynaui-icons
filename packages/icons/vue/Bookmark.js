import { defineComponent, h } from 'vue';

export const Bookmark = defineComponent({
  name: 'Bookmark',
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
        h('path', {"d": "M6.75 2.25c-.979 0-1.5.926-1.5 1.692v16.01c0 1.352 1.469 2.308 2.686 1.518l3.945-2.561a.21.21 0 0 1 .238 0l3.945 2.561c1.217.79 2.686-.165 2.686-1.518V3.942c0-.766-.521-1.692-1.5-1.692z", "fillRule": "evenodd"})
      ]
    );
  }
});
