export type responseObj = JSX.IntrinsicAttributes & {
  testObj: {
    username: string;
    userId: number;
    messages: Record<
      number,
      { content: string; sentiment: number; createdAt: Date }
    >;
  };
};
