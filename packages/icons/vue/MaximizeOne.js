import { defineComponent, h } from 'vue';

export const MaximizeOne = defineComponent({
  name: 'MaximizeOne',
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
        h('path', {"d": "M14 3.25a.75.75 0 0 0-.75.75l2.845 2.845L13.47 9.47a.75.75 0 1 0 1.06 1.06l2.625-2.625L20 10.75a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zm-10 10a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845 2.625-2.625a.75.75 0 1 0-1.06-1.06l-2.625 2.625z", "fillRule": "evenodd"})
      ]
    );
  }
});
