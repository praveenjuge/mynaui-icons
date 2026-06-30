import { defineComponent, h } from 'vue';

export const Bank = defineComponent({
  name: 'Bank',
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
        h('path', {"d": "M12.784 2.436a1.74 1.74 0 0 0-1.568 0L3.452 6.344c-1.64.825-1.074 3.327.784 3.327H6.25v7.579H4.5a2.25 2.25 0 0 0 0 4.5h15a2.25 2.25 0 0 0 0-4.5h-1.75V9.67h2.014c1.858 0 2.423-2.501.784-3.326zM7.75 17.25V9.67h3.5v7.58zm5 0V9.67h3.5v7.58z", "fillRule": "evenodd"})
      ]
    );
  }
});
