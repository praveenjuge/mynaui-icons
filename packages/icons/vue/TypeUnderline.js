import { defineComponent, h } from 'vue';

export const TypeUnderline = defineComponent({
  name: 'TypeUnderline',
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
        h('path', {"d": "M6 2.25a.75.75 0 0 1 .75.75v7.539c0 1.531.566 2.99 1.557 4.058.99 1.066 2.32 1.653 3.693 1.653s2.704-.587 3.693-1.653c.991-1.067 1.557-2.527 1.557-4.058V3a.75.75 0 0 1 1.5 0v7.539c0 1.895-.699 3.723-1.958 5.079-1.26 1.358-2.983 2.132-4.792 2.132s-3.531-.774-4.792-2.132c-1.26-1.356-1.958-3.184-1.958-5.08V3A.75.75 0 0 1 6 2.25M3.25 21a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
