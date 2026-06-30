import { defineComponent, h } from 'vue';

export const FatCornerDownLeft = defineComponent({
  name: 'FatCornerDownLeft',
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
        h('path', {"d": "M11.003 4a.75.75 0 0 0-1.312-.496l-7.253 8.214a.75.75 0 0 0 .013 1.007l7.253 7.786a.75.75 0 0 0 1.3-.511v-4.063c2.747-.194 5.118-1.342 7.08-3.422 2.126-2.253 3.341-5.054 3.663-8.365a.75.75 0 0 0-1.337-.535c-2.188 2.793-4.004 4.197-5.438 4.515-1.393.309-2.714.39-3.969.252z", "fillRule": "evenodd"})
      ]
    );
  }
});
