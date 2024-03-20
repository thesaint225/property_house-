import connectedDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";

// Get /api /properties
export const GET = async (request) => {
  try {
    await connectedDB();

    // 65e821685896e6b79285cef5

    const properties = await Property.find({});

    console.log(properties);
    return new Response(JSON.stringify(properties), {
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

export const POST = async (request) => {
  try {
    const formData = await request.formData();
    // Access all values from amenities  and images
    const amenities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");
    // Create propertyData object for database
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("name"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      images,
    };
    console.log(propertyData);
    return new Response(
      JSON.stringify({
        message: "Success",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
