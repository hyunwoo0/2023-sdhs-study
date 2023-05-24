//const data:Array<number> =[1,2,3,4,5];
const data: number[] = [1, 2, 3, 4, 5];

//const mixData:Array<number|string> = [1,2,3,4,"5"];
const mixData: (number | string)[] = [1, 2, 3, 4, "5"];

const mapData = data.map((v) => {
  return v;
});

const mixMapData = mixData.map((v) => {
  const temp = v;
  const toStringData = String(temp);
  return toStringData.length;
});
//=> string | number
//type: string,number, object{}, Array[],null,undefined,
//any: 다 들어감,never: type이 없다.
//Array<string|number>
//(string|number)[];
