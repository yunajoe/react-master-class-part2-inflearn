import { riceReducer } from "./rice/riceReducer";

/**
 * rootReducer: 각 하위 리듀서에게 상태의 일부를 맡기고 결과를 취합합니다.
 * @param {object} state - 전체 앱 상태
 * @param {object} action - 발생한 액션
 */

export function rootReducer(state, action) {
  return {
    rice: riceReducer(state.rice, action),
  };
}
