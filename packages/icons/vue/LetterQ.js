import { defineComponent, h } from 'vue';

export const LetterQ = defineComponent({
  name: 'LetterQ',
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
        h('path', {"d": "M10.462 6A3.466 3.466 0 0 0 7 9.47v4.942a3.466 3.466 0 0 0 3.461 3.47h4.508l.323.324a1 1 0 0 0 1.416-1.412l-.323-.325V9.471A3.466 3.466 0 0 0 12.923 6zM9 9.47C9 8.656 9.658 8 10.461 8h2.462c.804 0 1.462.655 1.462 1.47v4.992l-.753-.756a1 1 0 1 0-1.417 1.412l.762.764H10.46A1.466 1.466 0 0 1 9 14.412z", "fillRule": "evenodd"})
      ]
    );
  }
});
