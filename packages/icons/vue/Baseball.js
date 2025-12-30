import { defineComponent, h } from 'vue';

export const Baseball = defineComponent({
  name: 'Baseball',
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
        h('path', {"d": "M3.871 10.582q-.12.691-.121 1.418a8.25 8.25 0 0 0 5.413 7.75c1.383-4.247-.923-8.242-5.292-9.168m10.966-6.331c-1.383 4.246.923 8.241 5.292 9.167q.12-.691.121-1.418a8.25 8.25 0 0 0-5.413-7.75M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12", "fillRule": "evenodd"})
      ]
    );
  }
});
