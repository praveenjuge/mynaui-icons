import { defineComponent, h } from 'vue';

export default (iconName, iconNamePascal, iconNode) => {
  return defineComponent({
    name: iconNamePascal,
    props: {
      color: { type: String, default: 'currentColor' },
      size: { type: [String, Number], default: 24 },
    },
    setup(props, { slots, attrs }) {
      return () =>
        h(
          'svg',
          {
            ...attrs,
            width: props.size,
            height: props.size,
            fill: props.color,
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          [
            ...iconNode.map(([tag, attrs]) => h(tag, attrs)),
            ...(slots.default ? slots.default() : []),
          ],
        );
    },
  });
};
