import { defineComponent, h } from 'vue';

export const Gitlab = defineComponent({
  name: 'Gitlab',
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
        h('path', {"d": "M6.168 2.645a.75.75 0 0 0-1.39.184L2.27 13.537a.75.75 0 0 0 .257.753l8.982 7.292a.75.75 0 0 0 .944.001l9.019-7.292a.75.75 0 0 0 .258-.754L19.228 2.829a.75.75 0 0 0-1.41-.145l-2.814 6.063H9.445z", "fillRule": "evenodd"})
      ]
    );
  }
});
