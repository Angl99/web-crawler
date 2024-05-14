const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () =>{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    // expecting the actual to equal the expected = passed test
    expect(actual).toEqual(expected)
})