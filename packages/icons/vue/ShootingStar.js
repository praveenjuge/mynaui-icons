import { defineComponent, h } from 'vue';

export const ShootingStar = defineComponent({
  name: 'ShootingStar',
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
        h('path', {"d": "M9.883 2.47a.75.75 0 0 0-1.06 1.06l2.647 2.647a.75.75 0 1 0 1.06-1.06zM4.59 3.528A.75.75 0 0 0 3.527 4.59l5.824 5.824a.75.75 0 1 0 1.06-1.061zm10.728 4.431a.75.75 0 0 0-1.342 0L11.97 11.97l-4.01 2.006a.75.75 0 0 0 0 1.342l4.011 2.006 2.006 4.011a.75.75 0 0 0 1.342 0l2.006-4.011 4.011-2.006a.75.75 0 0 0 0-1.342l-4.011-2.006zM3.53 8.823a.75.75 0 0 0-1.06 1.06l2.647 2.647a.75.75 0 0 0 1.06-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
