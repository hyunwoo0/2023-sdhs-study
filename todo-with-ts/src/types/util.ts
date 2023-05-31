import type { Dispatch, SetStateAction } from "react";

type DispatchSetStateAction<T> = Dispatch<SetStateAction<T>>; //T -> Type

export type { DispatchSetStateAction };
