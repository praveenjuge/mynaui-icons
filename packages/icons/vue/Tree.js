import { defineComponent, h } from 'vue';

export const Tree = defineComponent({
  name: 'Tree',
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
        h('path', {"d": "M12.605 2.556a.75.75 0 0 0-1.21 0l-5.5 7.5A.75.75 0 0 0 6.5 11.25h1.569l-3.686 5.323A.75.75 0 0 0 5 17.75h6.25V21a.75.75 0 0 0 1.5 0v-3.25H19a.75.75 0 0 0 .617-1.177L15.93 11.25h1.57a.75.75 0 0 0 .605-1.194z", "fillRule": "evenodd"})
      ]
    );
  }
});
