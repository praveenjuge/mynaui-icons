import { defineComponent, h } from 'vue';

export const Lightning = defineComponent({
  name: 'Lightning',
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
        h('path', {"d": "M15.425 2.25c.841 0 1.404.798 1.212 1.563l-.049.153L14.49 9.35H17c.985 0 1.532 1.054 1.1 1.854l-.1.156-7.47 10.047c-.54.725-1.621.224-1.527-.605l.785-6.91H7c-.907 0-1.487-.924-1.155-1.735l.005-.011 3.906-9.128a1.25 1.25 0 0 1 1.151-.768z", "fillRule": "evenodd"})
      ]
    );
  }
});
