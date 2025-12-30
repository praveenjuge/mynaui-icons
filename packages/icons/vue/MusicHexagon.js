import { defineComponent, h } from 'vue';

export const MusicHexagon = defineComponent({
  name: 'MusicHexagon',
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
        h('path', {"d": "M11 13.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5", "fillRule": "evenodd"}),
        h('path', {"d": "m10.68 2.105-6.61 3.8-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002 6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8-.002-.002a2.63 2.63 0 0 0-2.64 0M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5", "fillRule": "evenodd"})
      ]
    );
  }
});
