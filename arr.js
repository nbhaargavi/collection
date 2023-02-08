let arr=[1,2,3,4];
console.log("Displaying array elements :",arr);

// push
arr.push(5);
console.log("push elements :",arr);

//pop
arr.pop();
console.log("elements after pop :",arr);

//splice
console.log("splice:");
let i1=["a","b","c","d","e"];
s=i1.splice(2,3);
console.log(i1);

//slice
console.log("slice:");
let c1=["a","b","c","d","e"];
s1=c1.slice(1,4);
console.log(c1);

//shift
console.log("Shifting :");
let c2=["a","b","c","d","e"];
a=c2.shift();
console.log(c2);

//unshift
let c3=["a","b","c","d","e"];
console.log("Unshifting:");
b=c3.unshift(0);
console.log(c3);

//length
let l1=[11,22,33,44,55,66];
console.log("length:");
let l=l1.length;
console.log(l);

//constructor
console.log("constructor:");
c1=l1.contructor;
console.log(c1);

//sort
console.log("sorting");
let so=["bhaargavi","aashi","abi","priya"];
c=so.sort((a,b) => {
    return (a-b);
})
console.log(so);

//copywithin
let arr1=[1,2,3,4,5]
w=arr1.copyWithin(2,0);
console.log("Copywithin : ",w);

//entries
let r1=[1,2,3,4,5]
console.log("entries :");
e=r1.entries();
console.log(e);

//ToString
console.log("To string :");
let r2=[1,2,3,4,5]
st=r2.toString();
console.log(st);

//ValueOf
console.log("value of :");
let r3=[1,2,3,4,5]
v=r3.valueOf();
console.log(v);

//Every
console.log("Every: ");
let num=[10,20,30]
console.log(num.every(fn))
function fn(a)
{
    return a%10==0;
}

//fill
console.log("Fill :");
fil=arr.fill("90")
console.log(fil);

//find
console.log("Find :");
console.log(arr.find(fn))
function fn(a)
{
    return a%10==0;
}

//findindex
console.log("Find Index:")
const even3 = [11, 22, 32, 42]
const final = even3.findIndex(even)
function even(even2)
{
    return even2%2==0
}
console.log(final)

//forEach
console.log("For Each :")
const numbers = [1,2,3,4,5,6];
numbers.forEach(myFun)
function myFun(value, index, arr9) {
  arr9[index] = value * 10;
  console.log(arr9[index])
}

//Array.from()
console.log("Array From :")
const f1 = Array.from("str")
console.log(f1)

//includes()
console.log("Includes :")
let ay = ["selena","zayn","tim","harry","selena"];
console.log(ay.includes("tim",2))

//index()
console.log("Index :")
let ar= ["selena","zayn","tim","harry","selena"];
let index = ar.indexOf("selena",3)
console.log(index)

//isArray()
console.log("Is Array :")
const arrr= ["selena","zayn","tim","harry","selena"]
let result = Array.isArray(arrr);
console.log(result)

//join
console.log("join :")
let abc=["a","b","c"]
console.log(abc.join())

//keys
console.log("Keys :")
let k=[1,5,7]
keys=k.keys()
let t=""
for(let v of keys)
{
    t+=v+ " "
}
console.log(t)

//lastindexof
console.log("Last index of :")
let li=["tim","brad","leo","tim"]
console.log(li.lastIndexOf("tim"))

//map
console.log("map :")
let no=[5,10,15]
console.log(no.map(fn1))
function fn1(a)
{
    return a*2;
}


