import { defineComponent, h } from 'vue';

export const LetterACircle = defineComponent({
  name: 'LetterACircle',
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
        h('path', {"d": "M12.918 12.083h-1.836L12 9.636z", "fillRule": "evenodd"}),
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.452-4.763a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z", "fillRule": "evenodd"})
      ]
    );
  }
});
