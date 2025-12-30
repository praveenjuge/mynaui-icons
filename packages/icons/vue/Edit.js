import { defineComponent, h } from 'vue';

export const Edit = defineComponent({
  name: 'Edit',
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
        h('path', {"d": "M18.925 3.137a3.027 3.027 0 0 0-4.283.001l-9.507 9.52a3.03 3.03 0 0 0-.885 2.139V18c0 .414.336.75.75.75h3.223c.803 0 1.573-.32 2.14-.887l9.5-9.506a3.03 3.03 0 0 0 0-4.28zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
