"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    // find interactions for the user and group by tags...
    // Interactions ...
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log("=> error getting all users from database:", error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    // eslint-disable-next-line no-unused-vars
    const { page = 0, pageSize = 10, filter, searchQuery } = params;
    const tags = await Tag.find({})
      .skip(page * pageSize)
      .limit(pageSize)
      .sort({ createdAt: -1 })
      .exec();
    return { tags };
  } catch (error) {
    console.log("=> error connecting to database for get all tags", error);
    throw error;
  }
}
