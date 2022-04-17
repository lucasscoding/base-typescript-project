import { HelloWorld } from '@/data/usecases'

describe('Hello', () => {
  it('should return hello world', () => {
    const hello = new HelloWorld()
    expect(hello.getHello()).toBe('Hello World')
  })
})
