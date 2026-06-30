import { defineComponent, h } from 'vue';

export const UserPlus = defineComponent({
  name: 'UserPlus',
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
        h('path', {"d": "M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m11.999 12.962c-.262-5.148-4.307-7.712-8.249-7.712s-7.987 2.563-8.249 7.712a.75.75 0 0 0 .71.787c3.365.171 12.998.106 15.077 0a.75.75 0 0 0 .711-.787M12 14.75a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V15.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
