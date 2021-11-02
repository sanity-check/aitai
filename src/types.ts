export type responseObj = JSX.IntrinsicAttributes & {
  testObj: {
    username: string;
    userId: number;
    messages: Record<
      string,
      { content: string; sentiment: number; createdAt: Date }
    >;
  };
};
