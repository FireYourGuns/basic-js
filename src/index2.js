class VigenereCipheringMachine {
    constructor (dir) {
        this.direction = dir;
        this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                                                                       
    }
    
          encrypt(message, key) {
            if (message==undefined || key==undefined) {
                throw new Error('Что-то пошло не так ((');
            }
            var m = message.toLowerCase().split('');
            var k = key.toLowerCase().split('');
            var string = "";
            var j = -1;
            for (var i = 0; i < m.length; i++) {
              if (this.alphabet.indexOf(m[i]) !== -1) {
                j++
              } 
              if (j >= k.length) {
                j %= k.length;
              }
              if (this.alphabet.indexOf(m[i]) === -1) {
                string += m[i];
              } else {
              var index = this.alphabet.indexOf(m[i]) + this.alphabet.indexOf(k[j]);
              if (index >= this.alphabet.length) {
                index = index % this.alphabet.length;
              }
              string += this.alphabet[index];
              }
            }
            return string.toUpperCase()
            
          }    

          decrypt(message, key) {
            if (message==undefined || key==undefined) {
              throw new Error('Что-то пошло не так ((');
          }
          }
};

console.log(         new VigenereCipheringMachine(false).encrypt('attack at dawn!', 'alphonse')  )
         
       