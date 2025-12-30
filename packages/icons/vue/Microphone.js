import { defineComponent, h } from 'vue';

export const Microphone = defineComponent({
  name: 'Microphone',
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
        h('path', {"d": "M12 2.25c-2.51 0-4.75 1.767-4.75 4.179v5.142c0 2.412 2.24 4.179 4.75 4.179s4.75-1.767 4.75-4.179V6.43c0-2.412-2.24-4.179-4.75-4.179", "fillRule": "evenodd"}),
        h('path', {"d": "M5.75 11a.75.75 0 0 0-1.5 0 7.75 7.75 0 0 0 7 7.714v1.536H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-1.536a7.75 7.75 0 0 0 7-7.714.75.75 0 0 0-1.5 0 6.25 6.25 0 1 1-12.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});
