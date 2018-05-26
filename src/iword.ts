import { WordTypes } from "./word-types.enum";

export interface IWord {
    part: WordTypes;
    label: string;
}
