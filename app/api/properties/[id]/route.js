import connectedDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";

// Get /api /properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectedDB();

    // 65e821685896e6b79285cef5

    const property = await Property.findById(params.id);

    if (!property) return new Response("property not Found", { status: 404 });

    return new Response(JSON.stringify(property), {
      status: 200,
    });
    return new Response(JSON.stringify(User), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
