/**
  * randomBytes browser implementation.
  *
  * Reference:
  * -   https://github.com/crypto-browserify/randombytes
  * -   https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
  *
  * @module utils/randomBytes
  * @param {string} size - the size
  * @return {string}
  */
function randomBytes(size) {
  if (typeof window !== 'object' || window == null) {
    throw new Error('Expecting randomBytes to be used in a browser environment.');
  }

  const crypto = window.crypto || window.msCrypto

  if (!crypto || typeof crypto.getRandomValues !== 'function') {
    throw new Error('Unable to load crypto module. You may be on an older browser.')
  }

  if (size > 65536) {
    throw new Error('Requested size of random bytes is too large.');
  }

  if (size < 1) {
    throw new Error('Requested size must be more than 0.');
  }

  const rawBytes = new Uint8Array(size);
  crypto.getRandomValues(rawBytes);

  return new Buffer(rawBytes.buffer);
}

export default randomBytes;