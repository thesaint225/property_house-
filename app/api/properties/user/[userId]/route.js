import connectedDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";

// Get /api /properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    const userId = params.userId;
    console.log(userId);

    if (!userId) {
      return new Response("User ID  is required", { status: 400 });
    }

    const properties = await Property.find({ owner: userId });

    console.log(properties);
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
    // return new Response(JSON.stringify(User), {
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
