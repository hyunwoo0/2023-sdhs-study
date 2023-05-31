import { InputHTMLAttributes } from "react";
import * as S from './styled';

//InputHTMLAttributes<type> 제네릭:<> 안, 부모에서 받은 값을 자식이 쓰는 방식
//js는 객체로 이루어져있음 element도 객체
//react는 가상DOM으로 tree구조에서 효율적으로 사용하기 위해서
//onChange:e.target.value => e  => ChageEvent는 타입 Event는 객체

/* <input onChange ={ e => e.target.value}/>
=> e-> Event<T=any>, target -> <T = any> => target:T 
e = Event<>
Event<> = ChangeEvent<>
e = ChangeEvent<>
target은 이벤트에서 받아온 제네릭이랑 같음
-> ChangeEvent<T> -> ChangeEvent<HTMLInputElement>
 */
//=> onChage:ChangeEvent<HTMLInputElement> <= <T=any>
//=> {target:HTMLInputElement}
//=> value

//1번째 type괴 interface 차이
//1
/* 
type은 type MyType = string과 typeMyColor = {color: string} 선언 가능
interface는 interface MyInterface{ };만 가능
*/
//단일 객체 가능
/*
type Color = string;
type MyType = {color: Color}; //=strig};

const MyData:MyType = {color: 'red'};
const MycColor:Color = 'red';


//2
//interface는 단일객체x 오브젝트 형식으로만
interface MyInterface {
    color: string;
}
interface MyColor {
    color:string;
    id:number;
}
const MyData2:MyInterface = {color:'red'};
*/

//2번째 type과 interface 차이
/*
type은 | 와 &로 다른 type과 섞어서 사용이 가능하다
interface는 extends 를 사용하여 다른 interface의 type을 상속 받아 사용 가능하다.
*/
type OpacityData = {opacity:number};
type MyType = {color:string};
//| > or
//& > and
type MyMixType = MyType | OpacityData;
//MyType 또는 OpacityData
const data:MyMixType = {color:'red',opacity:1};

//interface는 상속 받을 수 있다.
/*
interface Human{
    name:string;
    old:number;
}

interface HJ extends Human{
    job:string;
}

const hj:HJ = {name:'hj',old:23,job:'developer'};

interface MyOpacity{
    opacity:number;
}

interface MyInterface extends MyOpacity {
    color:string;
}
const data2:MyInterface = {color:'red',opacity:1};
*/
/*
props에서 우리가 원하는 type을 추가하는 법
interface Props extends 기존 타입{
    추가할type: type;
}
*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    color?:string; //?: optional 타입  있어도 되고 없어도 됨 // | undefined
}

//Partial<Type>
//Required<Type>

function Input(props:InputProps) {
    return <S.Input {...props}
    //attribute 
    />;
}

export default Input;