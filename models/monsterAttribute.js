import { schemaBuilder } from "./index"

const Attribute = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Attribute is required"],
      unique: [true, "Attribute is already exists"]
    }
  },
  "Attribute"
)

export default Attribute
