/**
 * 这是一个 Readable 的实现
 * 重点是实现 _read 方法，通常在方法内调用 this.push() 实现数据读取到 internal queue
 */

const { Readable } = require('stream');
const Chance = require('chance');

const chance = new Chance();

class RandomStream extends Readable {
  // eslint-disable-next-line no-useless-constructor
  constructor(options) {
    super(options);
  }

  // 从指定的数据源获取数据，然后调用 .push 将数据添加到内部 buffer
  // 这样 consumer 就可以触发 readable 事件，通过 .read() 方法得到数据
  // eslint-disable-next-line no-underscore-dangle
  _read() {
    console.log('====== _read ========');
    const chunk = chance.string(); // 生成一个随机的字符串
    console.log(chunk);
    this.push(`hello - ${chunk}`, 'utf8'); // push string into internal buffer. encoding is required for string.
    if (chance.bool({ likelihood: 5 })) {
      this.push(null); // pushing nulll means EOF, terminate the stream
    }
  }
}

module.exports = RandomStream;
