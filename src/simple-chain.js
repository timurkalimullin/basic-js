const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
      if (arguments.length===0) {this.arr.push("( )")}
      else {
      this.arr.push(`( ${String(value)} )`);
      } 
      return this;
  },
  removeLink(position) {
      if (position<1 || position>this.arr.length || !position || parseInt(position)!=position || typeof(position)!="number") {this.arr = []; throw Error;}
      else {this.arr.splice((position-1),1)};
      return this;
  },
  reverseChain() {
    let arr = this.arr.reverse();
    return this;
  },
  finishChain() {
   let str = this.arr.join("~~");
   this.arr =[];
   return str;
  }
};
module.exports = chainMaker;
