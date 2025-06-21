import { defineComponent, h } from 'vue';

export default (iconName, iconNamePascal, iconNode) => {
  return defineComponent({
    name: iconNamePascal,
    props: {
      color: { type: String, default: 'currentColor' },
      size: { type: [String, Number], default: 24 },
      stroke: { type: [String, Number], default: '1.5' },
    },
    setup(props, { slots, attrs }) {
      return () =>
        h(
          'svg',
          {
            ...attrs,
            width: props.size,
            height: props.size,
            fill: 'none',
            stroke: props.color,
            strokeWidth: props.stroke,
            viewBox: '0 0 24 24',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
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
