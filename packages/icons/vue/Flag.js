import { defineComponent, h } from 'vue';

export const Flag = defineComponent({
  name: 'Flag',
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
        h('path', {"d": "M19.538 3.723c-1.3 1.016-2.469 1.246-3.594 1.124-1.18-.127-2.342-.64-3.638-1.218l-.053-.024c-1.235-.552-2.6-1.162-4.036-1.317-1.511-.163-3.07.176-4.679 1.434a.75.75 0 0 0-.288.591V21a.75.75 0 0 0 1.5 0v-4.936c1.186-.835 2.264-1.023 3.306-.91 1.18.126 2.342.639 3.638 1.218l.053.023c1.235.553 2.6 1.162 4.036 1.317 1.511.163 3.07-.176 4.679-1.434a.75.75 0 0 0 .288-.591V4.313a.75.75 0 0 0-1.212-.59", "fillRule": "evenodd"})
      ]
    );
  }
});
