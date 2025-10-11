  const handleImageUpload = async (imageUri) => {
    // console.log("Image", imageUri);
    const formData = new FormData();
    const fileName = imageUri.split("/").pop();
    const type = `image/${fileName.split(".").pop()}`;

    formData.append("image", {
      uri: imageUri,
      name: fileName,
      type: type,
    });

    try {
      const response = await fetch(`${API_URL_UPLOADS}/uploads`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.json();
      return `${data.path}`; // Return the full URL
    } catch (error) {
      console.error("Upload error:", error);
      throw new Error("Failed to upload image");
    }
  };

  const createCustomerDetails = async (userId) => {
    const profilepic = await handleImageUpload(profileImage);}