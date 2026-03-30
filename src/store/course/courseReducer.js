export const courseInitialData = {
  items: [
    { id: 1, name: "React 마스터 클래스", price: 50000, quantity: 1 },
    { id: 2, name: "Next.js 실무 가이드", price: 45000, quantity: 1 },
  ],
  totalLectures: 0,
  totalPayments: 0,
};

export function courseReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
