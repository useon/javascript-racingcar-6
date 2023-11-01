import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultInfo() {
    Console.print('실행 결과');
  },

  printEmptystring() {
    Console.print('');
  },

  printRoundResult(score) {
    Console.print(score);
  },

  printFinalResult(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  },
};

export default OutputView;
