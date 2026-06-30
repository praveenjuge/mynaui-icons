import { defineComponent, h } from 'vue';

export const ArrowBigDownRight = defineComponent({
  name: 'ArrowBigDownRight',
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
        h('path', {"d": "M7.596 3.611c.512-.512 1.312-.456 1.786.018l6.51 6.51 2.54-2.601c.498-.498 1.165-.342 1.505-.167.355.181.798.591.813 1.198v9.798c0 .267 0 .511-.017.715-.018.22-.059.458-.178.692-.171.336-.445.61-.781.781-.235.12-.472.16-.692.178-.204.017-.448.017-.716.017H8.57c-.607-.015-1.017-.458-1.198-.813-.175-.34-.331-1.007.167-1.505l.006-.006 2.594-2.534-6.51-6.51c-.473-.474-.529-1.274-.017-1.785z", "fillRule": "evenodd"})
      ]
    );
  }
});
