import { defineComponent, h } from 'vue';

export const TrendingUp = defineComponent({
  name: 'TrendingUp',
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
        h('path', {"d": "M20.287 14.693A.75.75 0 0 0 20.75 14V7a.75.75 0 0 0-.673-.746L20 6.25h-7a.75.75 0 0 0-.53 1.28l3 3.001-1.849 1.88c-.316.318-.577.361-.86.32-.365-.054-.764-.25-1.317-.526l-.016-.008c-.492-.245-1.13-.562-1.8-.632-.753-.08-1.495.152-2.161.846l-4.001 4.063a.75.75 0 0 0 1.068 1.052l4.001-4.063.01-.009c.354-.372.644-.427.927-.397.36.037.76.22 1.303.49l.084.043c.47.235 1.069.534 1.684.625.734.108 1.48-.079 2.146-.751l1.842-1.872 2.939 2.938a.75.75 0 0 0 .817.163", "fillRule": "evenodd"})
      ]
    );
  }
});
