var lookup: any = {
  '0': 0b0000,
  '1': 0b0001,
  '2': 0b0010,
  '3': 0b0011,
  '4': 0b0100,
  '5': 0b0101,
  '6': 0b0110,
  '7': 0b0111,
  '8': 0b1000,
  '9': 0b1001,
  'a': 0b1010,
  'b': 0b1011,
  'c': 0b1100,
  'd': 0b1101,
  'e': 0b1110,
  'f': 0b1111,
  'A': 0b1010,
  'B': 0b1011,
  'C': 0b1100,
  'D': 0b1101,
  'E': 0b1110,
  'F': 0b1111,
};

export function hexToBinary(s: string): number {
  let ret = 0b0;
  for (var i = 0, len = s.length; i < len; i++) {
    ret += lookup[s[i]];
  }
  return ret;
}

export function binaryXOR(s1: string, s2: string): string {
  let result = '';

  if (s1.length != s2.length) {
    throw 'Strings must be of  the same length';
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) == s2.charAt(i)) {
      result = result + '0';
    } else {
      result = result + '1';
    }
  }
  return result;
}


export function mult( p1: number, p2: number ): number {
  //Multiply two polynomials in GF(2^4)/ x^4 + x + 1
  let p = 0
  while ( p2 ) {
    // at ith iteration, if ith coeff of p2 is set, add p1*x^i mod x^4+x+1 to result 
    if (p2 & 0b1) {
      p ^= p1
    }
    // compute pi = pi*x mod x^4+x+1
    p1 <<= 1
    // if degree of p1 is > 3, subtract x^4+x+1
    if (p1 & 0b10000) {
      p1 ^= 0b11
    }
    p2 >>=1
  }
  return p & 0b1111
}


export function Sub4Niblist(state: Array<number>): Array<number> {
  //S-Box
  const sBox: Array<number> = [0, 0x4, 0xa, 0xb, 0xd, 0x1, 0x8, 0x5,
    0x6, 0x2, 0x0, 0x3, 0xc, 0xe, 0xf, 0x7]
  let state_: Array<number> = [];
  for (let e of state) {
    console.log(e)
    console.log(sBox[e])
    state_.push(sBox[e])
  }
  console.log(state_)
  return state_
}

export function shiftRow( state: Array<number>): Array<number> {
  return [state[0], state[3], state[1], state[2]]
}

export function mixCol( s: Array<number>): Array<number> {
  //Defined as [1 4; 4 1] * [s[0] s[1]; s[2] s[3]] in GF(2^4)/x^4 + x + 1
  return [s[0] ^ mult(4, s[2]), s[1] ^ mult(4, s[3]), s[2] ^ mult(4, s[0]), s[3] ^ mult(4, s[1])]
}

export function VecToInt( s: number[]): number {
  // Convert a 4-nibble vector into a two-byte integer
  return (s[0]<<8) + (s[2]<<4) + (s[1]<<2) + s[3]
}

export function intToVec(n: number): number[] {
  //convert a integer into a 4-nibble vector
  return [n>>8, (n>>4) & 0xf, (n >> 4) & 0xf, n &0xf]
}
