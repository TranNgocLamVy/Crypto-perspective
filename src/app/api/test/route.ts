const POST = async (request: Request) => {
  const payload = await request.json();
  console.log(payload);

  return Response.json({ success: true });
};

export { POST };
