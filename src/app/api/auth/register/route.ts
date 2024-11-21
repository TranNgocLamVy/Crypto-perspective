import { BackEndBaseURL } from "@/src/libs";
import { SignupPayload } from "@/src/types/user";
import axios from "axios";

const POST = async (request: Request) => {
  const payload: SignupPayload = await request.json();
  const url = `${BackEndBaseURL}/auth/register`;

  try {
    const response = await axios.post(url, payload);
    return Response.json({
      success: true,
      message: response.data.message,
      data: null,
      status: response.status,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.response.data.message,
      data: null,
      status: error.status,
    });
  }
};

export { POST };
