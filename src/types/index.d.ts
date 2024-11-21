declare const customHeader = (token: string | null) => {
  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};

declare type CustomResponse<T> = {
  status: number;
  message: string;
  success: boolean;
  data: T;
};
