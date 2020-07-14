const cssInlineModule = import('@stranger6667/css-inline-wasm');


cssInlineModule.then(({ inline }) => {
  console.log(inline(`
  <html>
<head>
    <title>Test</title>
    <style>h1 { color:blue; }</style>
</head>
<body>
    <h1>Big Text</h1>
</body>
</html>
  `, {
    inline_style_tags: false,
    extra_css: 'h1 { color: green; } '
  }))
});