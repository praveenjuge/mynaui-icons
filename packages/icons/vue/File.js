import { defineComponent, h } from 'vue';

export const File = defineComponent({
  name: 'File',
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
        h('path', {"d": "M4.5 5.25a3 3 0 0 1 3-3h2.228c1.093 0 2.245.393 3.327.987 1.09.598 2.159 1.428 3.098 2.368s1.767 2.006 2.364 3.092c.591 1.077.983 2.221.983 3.303v6.75a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm12.481 3.788a13 13 0 0 0-1.889-2.373 13 13 0 0 0-2.38-1.894q.038.234.038.479V7.5a1.5 1.5 0 0 0 1.5 1.5h2.25q.246 0 .481.038", "fillRule": "evenodd"})
      ]
    );
  }
});
