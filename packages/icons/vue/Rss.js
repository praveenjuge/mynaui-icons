import { defineComponent, h } from 'vue';

export const Rss = defineComponent({
  name: 'Rss',
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
        h('path', {"d": "M5.25 11.25A.75.75 0 0 1 6 10.5a7.5 7.5 0 0 1 7.5 7.5.75.75 0 0 1-1.5 0 6 6 0 0 0-6-6 .75.75 0 0 1-.75-.75", "fillRule": "evenodd"}),
        h('path', {"d": "M5.25 6A.75.75 0 0 1 6 5.25 12.75 12.75 0 0 1 18.75 18a.75.75 0 0 1-1.5 0A11.25 11.25 0 0 0 6 6.75.75.75 0 0 1 5.25 6m2.134 10.97a.75.75 0 0 1 0 1.06l-.354.354a.75.75 0 1 1-1.06-1.06l.353-.354a.75.75 0 0 1 1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
