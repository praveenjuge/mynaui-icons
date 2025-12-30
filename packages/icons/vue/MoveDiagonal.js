import { defineComponent, h } from 'vue';

export const MoveDiagonal = defineComponent({
  name: 'MoveDiagonal',
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
        h('path', {"d": "M13 4.25a.75.75 0 0 0-.75.75l2.845 2.845-7.25 7.25L5 12.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845 7.25-7.25L19 11.75a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
