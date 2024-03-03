import connectedDB from "@/config/database";
export const GET = async (request) => {
  try {
    await connectedDB();
    return new Response(JSON.stringify({ message: "hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
