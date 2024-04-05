import connectedDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/Utils/getSessionUser";

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
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// DELETE /api /properties/:id

export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;
    const sessionUser = await getSessionUser();

    // Check for session

    if (!sessionUser || !sessionUser.userId) {
      return new response("User ID is required", { status: 401 });
    }
    const { userId } = sessionUser;
    await connectedDB();

    // 65e821685896e6b79285cef5

    const property = await Property.findById(propertyId);

    if (!property) return new Response("property not Found", { status: 404 });

    // verifying ownership
    if (property.owner.toString() === !userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    await property.deleteOne();

    return new Response("Property deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
