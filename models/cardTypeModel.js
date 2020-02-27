import { schemaBuilder } from "./index"

const Type = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Type is required"],
      unique: [true, "Type is already exists"]
    }
  },
  "Type"
)

export default Type
