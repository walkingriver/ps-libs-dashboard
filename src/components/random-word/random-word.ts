import { Component, Input } from '@angular/core';
import { WordTypes } from '../../word-types.enum';
import { IWord } from '../../iword';
import { WordProvider } from '../../providers/word/word';

@Component({
  selector: 'app-random-word',
  templateUrl: 'random-word.html'
})
export class RandomWordComponent {
  @Input() type: WordTypes;
  word: IWord;

  constructor(public wordsService: WordProvider) { }

  ngOnInit() {
    this.word = this.wordsService.getWord(this.type);
  }

}
