# Contributing

Thank you for taking the time to contribute to this project!

## Install Dependencies

Use [Bun](https://bun.sh/) to install the development dependencies:

```sh
bun install
```

## Run Checks

Before opening a pull request, make sure the code passes the repository checks:

```sh
bun run lint         # run eslint
bun run format       # format code with Prettier
bun run check:icons  # validate SVG icon files
```

`bun run check:icons` verifies that the SVG files in `icons` and `icons-solid` match exactly. It also fails if any filenames include numbers or if the SVGs use the `evenodd` fill rule.

Additional build scripts can be found in `package.json` if you need them.

## Icon Guidelines

- Each icon must exist in both the `icons/` and `icons-solid/` directories with
  identical filenames.
- Filenames should be written in kebab-case and avoid numbers. The
  `check-icons` script enforces these rules.

## Issues and Pull Requests

- For bug reports or icon requests, please use the templates available in the [issue tracker](https://github.com/praveenjuge/myna-icons/issues/new/choose).
- Fork the repository and create a new branch for your change.
- Open a pull request describing your changes when you're ready for review.

We appreciate your contributions!
