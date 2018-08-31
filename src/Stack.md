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

One more example:

```jsx
const styled = require('styled-components').default;
const Button = styled.button({
  padding: '8px 16px',
  border: 0,
  borderRadius: '2px',
  background: 'salmon',
  color: 'white',
  fontSize: '1rem'
});
<Stack justifyContent={['', 'start']} gridAutoFlow={['', 'column']}>
  <Button>Drink coffee</Button>
  <Button>Buy pizza</Button>
  <Button>Großes Frühstück essen</Button>
</Stack>;
```
