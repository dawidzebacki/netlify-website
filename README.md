# BrandDevs Next.js + CMS boilerplate

# Repository structure:

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── content                         # Content in markdown for pages
├── public                          # Public assets folder
├── src
│   ├── cms                         # CMS configuration
│   ├── cms                         # Components used in the app
│   ├── layouts                     # Layouts
│   ├── pages                       # Next Pages
│   ├── styles                      # global & common SCSS
│   ├── templates                   # Templates
│   └── utils                       # Utility functions
```

# How to style?

- Create `styles.module.scss` file in target directory
- Create some styles:

```scss
.content {
  background-color: red;
}

.content-item {
  background-color: yellow;
}

.content-item--active {
  background-color: green;
}
```

- Import these styles `import styles from './styles.module.scss';`
- Use it like that:

```jsx
// Default styling
<div className={styles.content}>
  // Array because of `-` in style name
  <p className={styles["content-item"]}>Inactive content</p>
  // Multiple styles
  <p
    className={`${styles["content-item"]} ${styles["content-item--active"]}
    `}
  >
    Active content
  </p>
</div>
```

```jsx
// Extend classNames
export const Wrapper: FC<WrapperProps> = ({
  children,
  classNames,
}) => {
  return (
    <div
      className={`${
        classNames
          ? `${styles["content-wrapper"]} ${classNames}`
          : `${styles["content-wrapper"]}`
      }`}
    >
      {children}
    </div>
  );
};
```

- You can extend global & common styles in `styles` directory
- Use them in your custom styles like that:

```scss
// Import only what you need
@use "@/styles/colors";
@use "@/styles/typography";
@use "@/styles/display";

.custom-item {
  // Use primary color
  color: colors.$primary;

  // Use data from mixin
  @include typography.sm-regular;

  // Above mixin is the same as:
  // font-size: 14px;
  // line-height: 20px;
  // font-weight: 400;
}

.custom-wrapper {
  // Use data from default wrapper mixin
  @include display.default-wrapper;

  // Extend it with custom properties
  background-color: red;
  color: white;
}
```

# How to code?

- Use semantic `html` tags to improve SEO performance
- Use FC and types where needed:

```tsx
type CustomComponentProps = {
  name: string;
  age: number;
  isActive: boolean;
};

export const CustomComponent: FC<CustomComponentProps> = ({
  name,
  age,
  isActive,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? "Yes" : "No"}</p>
    </div>
  );
};
```

- Wrap content in `Main` template and `Meta` layout if you create new page:

```tsx
<Main meta={<Meta title="New page" description="New page description">}>
  <CustomComponent>
</Main>
```
