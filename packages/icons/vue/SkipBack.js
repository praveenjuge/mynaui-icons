import { defineComponent, h } from 'vue';

export const SkipBack = defineComponent({
  name: 'SkipBack',
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
        h('path', {"d": "M4.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m12.907 1.464c1.146-.917 2.843-.1 2.843 1.367v13.838c0 1.468-1.697 2.284-2.843 1.367l-8.65-6.92a1.75 1.75 0 0 1 0-2.732z", "fillRule": "evenodd"})
      ]
    );
  }
});
