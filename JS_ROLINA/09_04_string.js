// String Prototype - Part 4
// Legacy HTML related methods (knowledge purpose)

let word = "Hello";

console.log(word.bold());
// Output: "<b>Hello</b>"
// Explanation: string ko HTML bold tag me wrap karta hai
// legacy method hai

console.log(word.italics());
// Output: "<i>Hello</i>"
// Explanation: italics HTML tag add karta hai (legacy)

console.log(word.strike());
// Output: "<strike>Hello</strike>"
// Explanation: strike-through text ke liye

console.log(word.fontcolor("red"));
// Output: "<font color="red">Hello</font>"
// Explanation: font color HTML string banata hai
// real projects me use nahi hota

console.log(word.fontsize(5));
// Output: "<font size="5">Hello</font>"
// Explanation: font size HTML string return karta hai

console.log(word.link("https://google.com"));
// Output: "<a href="https://google.com">Hello</a>"
// Explanation: anchor tag create karta hai

console.log(word.small());
// Output: "<small>Hello</small>"
// Explanation: small text HTML tag

console.log(word.big());
// Output: "<big>Hello</big>"
// Explanation: big text HTML tag

console.log(word.sub());
// Output: "<sub>Hello</sub>"
// Explanation: subscript text

console.log(word.sup());
// Output: "<sup>Hello</sup>"
// Explanation: superscript text

console.log(word.anchor("top"));
// Output: "<a name="top">Hello</a>"
// Explanation: anchor name create karta hai

console.log(word.fixed());
// Output: "<tt>Hello</tt>"
// Explanation: fixed-width font (legacy)

/*
Note:
- Ye saare methods legacy hain
- Modern JS / React me use nahi hote
- Interview aur prototype understanding ke liye important
*/
