import 'module-alias/register'
import { HelloWorld } from '@/data/usecases'

const hello = new HelloWorld()
console.log(hello.getHello())
