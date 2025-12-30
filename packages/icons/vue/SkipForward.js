import { defineComponent, h } from 'vue';

export const SkipForward = defineComponent({
  name: 'SkipForward',
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
        h('path', {"d": "M19.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M3.75 5.08c0-1.467 1.697-2.283 2.843-1.366l8.65 6.92a1.75 1.75 0 0 1 0 2.733l-8.65 6.919c-1.146.917-2.843.1-2.843-1.367z", "fillRule": "evenodd"})
      ]
    );
  }
});
