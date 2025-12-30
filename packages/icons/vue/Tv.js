import { defineComponent, h } from 'vue';

export const Tv = defineComponent({
  name: 'Tv',
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
        h('path', {"d": "M19.274 2.613a.75.75 0 0 1-.255 1.03L14.696 6.25H19c1.57 0 2.75 1.353 2.75 2.904v9.692c0 1.55-1.18 2.904-2.75 2.904H5c-1.57 0-2.75-1.353-2.75-2.904V9.154C2.25 7.604 3.43 6.25 5 6.25h3.995L4.96 3.629a.75.75 0 1 1 .817-1.258l5.972 3.879h.042l6.453-3.892a.75.75 0 0 1 1.03.255", "fillRule": "evenodd"})
      ]
    );
  }
});
