### Props

```jsx noeditor
const Props = require('react-styleguidist/lib/rsg-components/Props')
  .default;
<Props
  props={[
    {
      name: 'gap',
      type: {
        name: 'union',
        value: [
          { name: 'number' },
          { name: 'arrayOf', value: { name: 'number' } }
        ]
      },
      defaultValue: { value: '2' },
      description:
        'Gap between children. Default: 8px, see the scale below'
    },
    {
      name: 'is',
      type: {
        name: 'union',
        value: [{ name: 'string' }, { name: 'node' }]
      },
      description: 'Custom HTML element or React component'
    },
    {
      name: 'minWidth',
      type: { name: 'number' },
      description: 'Minimum width of a child'
    }
  ]}
/>;
```

### Default scale

| 0   | 1   | 2   | 3    | 4    | 5    | 6     | 7     | 8     |
| --- | --- | --- | ---- | ---- | ---- | ----- | ----- | ----- |
| 0px | 4px | 8px | 16px | 32px | 64px | 128px | 256px | 512px |

### Examples

Vertical stack (default):

```jsx
<Stack>
  {[1, 2, 3].map(index => (
    <div key={index} style={{ background: '#def2fb', height: 32 }} />
  ))}
</Stack>
```

Miltiline stack:

```jsx
<Stack minWidth={200}>
  {images.map(i => (
    <img key={i} src={i} alt="" style={{ maxWidth: '100%' }} />
  ))}
</Stack>
```

Custom gap (32px):

```jsx
<Stack gap={4} minWidth={200}>
  {images.slice(0, 3).map(i => (
    <img key={i} src={i} alt="" style={{ maxWidth: '100%' }} />
  ))}
</Stack>
```

Responsive gap (8px, 16px, 32px depending on the viewport width):

```jsx
<Stack gap={[2, 3, 4]} minWidth={200}>
  {images.slice(0, 3).map(i => (
    <img key={i} src={i} alt="" style={{ maxWidth: '100%' }} />
  ))}
</Stack>
```

Accepts styled-system [spacing props](http://jxnblk.com/styled-system/table/#core), like `mt` or `mb`:

```jsx
<Stack minWidth={200} mt={4} mb={4}>
  {images.slice(0, 3).map(i => (
    <img key={i} src={i} alt="" style={{ maxWidth: '100%' }} />
  ))}
</Stack>
```

You can also use it as a generic CSS Grid component:

```jsx
<Stack gridTemplateColumns="1fr 2fr 1fr" alignItems="center">
  {images.slice(0, 3).map(i => (
    <img key={i} src={i} alt="" style={{ maxWidth: '100%' }} />
  ))}
</Stack>
```

_Available props are `alignContent`, `alignItems`, `justifyContent`, `gridGap`, `gridRowGap`, `gridColumnGap`, `gridColumn`, `gridRow`, `gridAutoFlow`, `gridAutoRows`, `gridAutoColumns`, `gridTemplateRows` and `gridTemplateColumns`. See more in [styled-system docs](https://jxnblk.com/styled-system/table)._

Responsive buttons (full width on small screens, horizontally stacked on larger screens):

```jsx
const Button = require('../styleguide/Button').default;
<Stack justifyContent={['', 'start']} gridAutoFlow={['', 'column']}>
  <Button>Drink coffee</Button>
  <Button>Buy pizza</Button>
  <Button>Großes Frühstück essen</Button>
</Stack>;
```

More responsive buttons (vertically stacked on small screens, 2×2 grid on larger screens):

```jsx
const Button = require('../styleguide/Button').default;
<Stack minWidth={320}>
  <Button>Buy at LeanPub</Button>
  <Button>Buy at Amazon</Button>
  <Button>Buy for Kindle</Button>
  <Button>Read for free</Button>
</Stack>;
```

Medium-style [article layout](http://gedd.ski/post/article-grid-layout/):

```jsx
const Button = require('../styleguide/Button').default;
const Heading = require('../styleguide/Heading').default;
const Para = require('../styleguide/Para').default;
<Stack gridTemplateColumns="minmax(16px, 1fr) minmax(auto, 57ch) minmax(16px, 1fr)">
  <Stack gridColumn="1/4">
    <img src={images[1]} alt="" style={{ maxWidth: '100%' }} />
  </Stack>
  <Stack gridColumn="2">
    <Heading>Down the Rabbit Hole</Heading>
    <Para>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversation?”</Para>
    <Para>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</Para>
  </Stack>
</Stack>;
```
