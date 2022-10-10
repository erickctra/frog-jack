export interface cardProps {
  value: number;
  cardFigure: string | number;
}

export class Card {
  private props: cardProps;

	get value () {
		return this.props.value
	}

	get figure () {
		return this.props.cardFigure
	}

  constructor() {
    const randomValue = Math.floor(Math.random() * 13) + 1;
    
    let formatedValue = randomValue > 10 ? 10 : randomValue;
    let letter: string | number = formatedValue;

    if (randomValue === 1) {
      letter = 'A';
    } 
    else if (randomValue === 12) {
      letter = 'Q';
    }
    else if (randomValue === 12) {
      letter = 'Q';
    }    
    else if (randomValue === 13) {
      letter = 'K';
    }

    const props: cardProps = { value: formatedValue, cardFigure: letter}

    this.props = props;
  }
}