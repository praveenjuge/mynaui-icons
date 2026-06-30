import { defineComponent, h } from 'vue';

export const RailSymbol = defineComponent({
  name: 'RailSymbol',
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
        h('path', {"d": "M6.918 3.374a1.25 1.25 0 0 1 1.594-.515l.114.059 7.709 4.457H20a1.25 1.25 0 1 1 0 2.5h-3.544l-5.037 4.25H20a1.25 1.25 0 0 1 0 2.5h-7.34l3.966 2.293.107.07a1.25 1.25 0 0 1-1.359 2.094l-7.709-4.457H4a1.25 1.25 0 1 1 0-2.5h3.544l5.037-4.25H4a1.25 1.25 0 1 1 0-2.5h7.34L7.374 5.082a1.25 1.25 0 0 1-.456-1.708", "fillRule": "evenodd"})
      ]
    );
  }
});
