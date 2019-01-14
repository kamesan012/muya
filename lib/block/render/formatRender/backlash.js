export default function backlash (h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor)
  const { start, end } = token.range
  const content = this.highlight(h, block, start, end, token)

  return [
    h(`span.${className}.mu-remove`, content)
  ]
}