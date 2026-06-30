import { defineComponent, h } from 'vue';

export const MinimizeOne = defineComponent({
  name: 'MinimizeOne',
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
        h('path', {"d": "M20.53 3.47a.75.75 0 0 0-1.06 0l-2.625 2.625L14 3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845L20.53 4.53a.75.75 0 0 0 0-1.06M4 13.25a.75.75 0 0 0-.75.75l2.845 2.845L3.47 19.47a.75.75 0 1 0 1.06 1.06l2.625-2.625L10 20.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
